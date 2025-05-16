// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // ✅ Correct import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIYgrtA5rWnDTIqlKS00iLDp--WLggcMs",
  authDomain: "clinic-management-system-b2e15.firebaseapp.com",
  projectId: "clinic-management-system-b2e15",
  storageBucket: "clinic-management-system-b2e15.firebasestorage.app",
  messagingSenderId: "206183940463",
  appId: "1:206183940463:web:cc0ae063fc000bfac4a89a",
  measurementId: "G-31Q5ZR3HYD",
  databaseURL: "https://clinic-management-system-b2e15-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // ✅ Get the database

export { app, database }; // ✅ Export for use in other files
