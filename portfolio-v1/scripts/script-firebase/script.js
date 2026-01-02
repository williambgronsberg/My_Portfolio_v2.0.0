  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyArjCHQ8SkhlNkJQFZ2Oc6K7--hNybbixw",
    authDomain: "portfolio-82f1e.firebaseapp.com",
    projectId: "portfolio-82f1e",
    storageBucket: "portfolio-82f1e.firebasestorage.app",
    messagingSenderId: "390352696121",
    appId: "1:390352696121:web:0708c16a848028514caee8",
    measurementId: "G-X31H5J1GR6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
