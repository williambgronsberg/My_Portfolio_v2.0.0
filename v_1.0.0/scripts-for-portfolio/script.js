// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase Configuration
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
const auth = getAuth();
const db = getFirestore();

// Sign Up Function
export async function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Log Analytics Event
        logEvent(analytics, 'sign_up', { method: 'email' });

        // Add user to Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            role: "user",
            createdAt: new Date(),
        });

        alert('User signed up successfully!');
    } catch (error) {
        console.error('Sign Up Error:', error.message);
        alert('Sign Up Error: ' + error.message);
    }
}

// Login Function
export async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Log Analytics Event
        logEvent(analytics, 'login', { method: 'email' });

        // Check user role
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            checkAdmin(userData);
        } else {
            console.error('No user data found in Firestore');
            alert('No user data found in Firestore');
        }
    } catch (error) {
        console.error('Login Error:', error.message);
        alert('Login Error: ' + error.message);
    }
}

// Check Admin Access
function checkAdmin(userData) {
    if (userData.role === "admin") {
        document.getElementById('admin-dashboard').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'none';
        alert('Welcome, Admin!');
    } else {
        alert('Welcome, User!');
    }
}

// Logout Function
export async function logout() {
    try {
        await signOut(auth);

        // Log Analytics Event
        logEvent(analytics, 'logout');

        document.getElementById('admin-dashboard').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'block';
    } catch (error) {
        console.error('Logout Error:', error.message);
        alert('Logout Error: ' + error.message);
    }
}
