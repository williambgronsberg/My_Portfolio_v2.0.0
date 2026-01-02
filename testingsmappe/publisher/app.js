/**
 * @Author: William Berge Groensberg
 * @Date:   2025-07-14 00:20:16
 * @Last Modified by:   William Berge Groensberg
 * @Last Modified time: 2025-07-15 01:01:06
 */
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBvoFOw3qtEeBz8rOi2zOAGwuK2u3lMmlw",
  authDomain: "webify-f0363.firebaseapp.com",
  projectId: "webify-f0363",
  storageBucket: "webify-f0363.firebasestorage.app",
  messagingSenderId: "719687136021",
  appId: "1:719687136021:web:18a5b3f9fbb9af54cd6f1c",
  measurementId: "G-Y7T8SFK1RF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const allowedEmails = ["williamgronsberg31@gmail.com", "school@email.com"];

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userDisplay = document.getElementById("user");
const titleH1 = document.getElementById("title");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const publishBtn = document.getElementById("publishBtn");

const projectNameInput = document.getElementById("projectName");
const codeInput = document.getElementById("codeInput");
const responseArea = document.getElementById("response");

// Login
loginBtn.addEventListener("click", () => {
  auth.signInWithPopup(provider).then(result => {
    const user = result.user;
    if (allowedEmails.includes(user.email)) {
      userDisplay.textContent = `Welcome, ${user.displayName}`;
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline";
      titleH1.textContent = "Enter your project name";
      step1.classList.add("active");
    } else {
      alert("Access denied");
      auth.signOut();
    }
  }).catch(console.error);
});

// Logout
logoutBtn.addEventListener("click", () => {
  auth.signOut().then(() => {
    userDisplay.textContent = "";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
    titleH1.textContent = "Login to Webify 🔐";
    step1.classList.remove("active");
    step2.classList.remove("active");
    responseArea.textContent = "";
    projectNameInput.value = "";
    codeInput.value = "";
  });
});

// Next step - from title to code paste
nextBtn.addEventListener("click", () => {
  const project = projectNameInput.value.trim();
  if (!project.match(/^[a-zA-Z0-9_-]+$/)) {
    alert("Project name must only contain letters, numbers, _ and -");
    return;
  }
  titleH1.textContent = "Paste your HTML code";
  step1.classList.remove("active");
  step2.classList.add("active");
  codeInput.focus();
});

// Back step
backBtn.addEventListener("click", () => {
  titleH1.textContent = "Enter your project name";
  step2.classList.remove("active");
  step1.classList.add("active");
  responseArea.textContent = "";
});

// Publish
publishBtn.addEventListener("click", () => {
  const project = projectNameInput.value.trim();
  const code = codeInput.value.trim();
  if (!code) {
    alert("Paste some code first!");
    return;
  }
  responseArea.textContent = "Publishing...";

  fetch("publish.php", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ project, code })
  })
  .then(res => res.text())
  .then(data => {
    responseArea.textContent = data + `\nOpen at /testingsmappe/publisher/sites/${project}/`;
  })
  .catch(err => {
    responseArea.textContent = "Error: " + err.message;
  });
});
