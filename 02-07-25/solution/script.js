const notesContainer = document.getElementById('notesContainer');
const addNoteBtn = document.getElementById('addNote');


const COLORS = ['#FFEB3B', '#64FFDA', '##FEE10C', '#D1C4E9', '#C8E6C9', '#FFE082', '#B2EBF2', '#B3E5FC', '#CFD8DC', '#E0F2F7', '#BBDEFB'];
let availableColors = []; // non repeating color logic, to track avilable color

window.onload = function () {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
 
  availableColors = [...COLORS];  // reset availableColors  using rrest or spread operator 

  savedNotes.forEach(note => {

    const index = availableColors.indexOf(note.color); // if color is not found return -1
    if (index > -1) { 
      availableColors.splice(index, 1); // remove the current color
    }
    createNote(note.text, note.color);
  });
};

function createNote(text = '', color = null) {
  const note = document.createElement('div');
  note.className = 'note';

  let selectedColor; // variable declaration for storing bg color for new note
  if (color) {
    selectedColor = color;
  } else { // If no color is provided (new note)
    if (availableColors.length === 0) {
      availableColors = [...COLORS]; //reset the colors using rest operator.
    }
    const randomIndex = Math.floor(Math.random() * availableColors.length); // generate the random number between the AvaiColor lenght
    selectedColor = availableColors[randomIndex];
    availableColors.splice(randomIndex, 1);  // Remove the selected color
  }

  note.style.backgroundColor = selectedColor; // replace the note bg color

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.addEventListener('input', saveNotes); // it automatically store the value in local storage

  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.className = 'save-btn';
  saveBtn.addEventListener('click', saveNotes);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    const deletedColor = note.style.backgroundColor;
    if (!availableColors.includes(deletedColor)) {  // check deletedcolor is stored in availcolor
      availableColors.push(deletedColor); // adding end of the array
    }
    note.remove();
    saveNotes();
  });

  btnContainer.appendChild(saveBtn);
  btnContainer.appendChild(deleteBtn);

  note.appendChild(textArea);
  note.appendChild(btnContainer);
  notesContainer.appendChild(note);

  saveNotes();
}

addNoteBtn.addEventListener('click', () => {
  createNote();
});

function saveNotes() {
  const notes = [];
  const allNotes = document.querySelectorAll('.note');

  allNotes.forEach(note => {
    const text = note.querySelector('textarea').value;
    const color = note.style.backgroundColor;
    notes.push({ text, color });
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}