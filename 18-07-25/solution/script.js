
const url = "https://api.github.com/repos/Joicemercy78/internship-2025/contents/18-07-25/chatbot.json?ref=chatbot";
let qa = [];

async function fetchQA() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const decoded = atob(data.content);
    qa = JSON.parse(decoded);

    // Show welcome message after loading data
    showMessage("Hello! I'm Joy. Ask me anything!", "bot");
  } catch (err) {
    console.error("Failed to fetch data:", err);
  }
}

fetchQA();

function send() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const userQuestion = input.value.trim();

  if (!userQuestion) return;

  showMessage(userQuestion, "user");

  const match = qa.find(
    (q) => q.question.toLowerCase().trim() === userQuestion.toLowerCase().trim()
  );

  if (match) {
    showMessage(match.answer, "bot");
  } else {
    showMessage("Sorry, I don't understand that yet.", "bot");
    showQuestionList(); // show list after Sorry
  }

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}

function showMessage(text, type) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("p");
  msg.className = type;
  msg.textContent = text;
  chatBox.appendChild(msg);
}

function showQuestionList() {
  const chatBox = document.getElementById("chatBox");
  const questionList = document.createElement("ul");
  questionList.className = "question-list";

  // Title
  const title = document.createElement("p");
  title.textContent = "Try asking me:";
  title.style.fontWeight = "bold";
  title.style.textAlign = "center";
  questionList.appendChild(title);

  qa.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.question;
    li.onclick = () => {
      document.getElementById("userInput").value = item.question;
      send();
    };
    questionList.appendChild(li);
  });

  // Add suggestions inside chat
  chatBox.appendChild(questionList);
  chatBox.scrollTop = chatBox.scrollHeight;
}