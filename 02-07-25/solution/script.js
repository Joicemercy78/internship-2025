const notesContainer = document.getElementById('notesContainer');
const addNoteBtn = document.getElementById('addNote');

window.onload = function () {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

  savedNotes.forEach(note => {
    createNote(note.text, note.color);
  });
};

function createNote(text = '', color = null) {
  const note = document.createElement('div');
  note.className = 'note';

  const colors = ['#FFEB3B', '#64FFDA', '#FFCDD2', '#D1C4E9', '#C8E6C9', '#FFE082', '#B2EBF2'];
  const randomColor = color || colors[Math.floor(Math.random() * colors.length)];
  note.style.backgroundColor = randomColor;

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.addEventListener('input', saveNotes);

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
