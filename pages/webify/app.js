/**
 * @Author: William Berge Groensberg
 * @Date:   2025-07-14 00:20:16
 * @Last Modified by:   William Berge Groensberg
 * @Last Modified time: 2025-07-14 00:27:13
 */
// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBvoFOw3qtEeBz8rOi2zOAGwuK2u3lMmlw",
  authDomain: "webify-f0363.firebaseapp.com",
  projectId: "webify-f0363",
  storageBucket: "webify-f0363.firebasestorage.app",
  messagingSenderId: "719687136021",
  appId: "1:719687136021:web:18a5b3f9fbb9af54cd6f1c",
  measurementId: "G-Y7T8SFK1RF"
};

// 🔌 Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// 🛑 Only allow these Google emails
const allowedEmails = [
  "williamgronsberg31@gmail.com", // 👈 change to your real ones
  "school@email.com"
];

// 🔘 Login
document.getElementById("loginBtn").addEventListener("click", () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      if (allowedEmails.includes(user.email)) {
        document.getElementById("user").textContent = `Welcome, ${user.displayName}`;
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline";
      } else {
        auth.signOut();
        alert("Access denied. You are not authorized.");
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
    });
});

// 🔘 Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    document.getElementById("user").textContent = "";
    document.getElementById("loginBtn").style.display = "inline";
    document.getElementById("logoutBtn").style.display = "none";
  });
});
