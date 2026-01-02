<!-- 
  @Author: William Berge Groensberg
  @Date:   2025-07-13 19:55:58
  @Last Modified by:   William Berge Groensberg
  @Last Modified time: 2025-07-14 00:35:32
-->
<?php
$firebaseConfig = [
  "apiKey" => "AIzaSyBvoFOw3qtEeBz8rOi2zOAGwuK2u3lMmlw",
  "authDomain" => "webify-f0363.firebaseapp.com",
  "projectId" => "webify-f0363",
  "storageBucket" => "webify-f0363.firebasestorage.app",
  "messagingSenderId" => "719687136021",
  "appId" => "1:719687136021:web:18a5b3f9fbb9af54cd6f1c",
  "measurementId" => "G-Y7T8SFK1RF"
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Webify Login</title>
</head>
<body>
  <h1>Login to Webify 🔐</h1>
  <button id="loginBtn">Sign in with Google</button>
  <button id="logoutBtn" style="display:none;">Log out</button>
  <p id="user"></p>

  <!-- Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.5.2/firebase-auth-compat.js"></script>

  <script>
    // Inject PHP config as a JS object
    const firebaseConfig = <?php echo json_encode($firebaseConfig); ?>;

    // Init Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    // Your allowed emails here (can also come from PHP similarly)
    const allowedEmails = [
      "william.dev@example.com",
      "school@email.com"
    ];

    // Login button handler
    document.getElementById("loginBtn").addEventListener("click", () => {
      auth.signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          if (allowedEmails.includes(user.email)) {
            document.getElementById("user").textContent = `Welcome, ${user.displayName}`;
            document.getElementById("loginBtn").style.display = "none";
            document.getElementById("logoutBtn").style.display = "inline";
          } else {
            auth.signOut();
            alert("Access denied.");
          }
        })
        .catch(console.error);
    });

    // Logout button handler
    document.getElementById("logoutBtn").addEventListener("click", () => {
      auth.signOut().then(() => {
        document.getElementById("user").textContent = "";
        document.getElementById("loginBtn").style.display = "inline";
        document.getElementById("logoutBtn").style.display = "none";
      });
    });
  </script>
</body>
</html>
