import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from './toast';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi1zPz1NrXuec2bSxNV0ITQMwabH5UY88",

    authDomain: "movieapp-a77ff.firebaseapp.com",
  
    projectId: "movieapp-a77ff",
  
    storageBucket: "movieapp-a77ff.appspot.com",
  
    messagingSenderId: "671087752833",
  
    appId: "1:671087752833:web:22973d7bb08326155fff80",
  
    measurementId: "G-8G0N93MFZE"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Function to log in the user
export async function loginUser(username: string, password: string): Promise<boolean> {
  const email = `${username}@codedamn.com`; // Construct email format
  try {
    const auth = getAuth(); // Initialize Firebase Auth
    const res = await signInWithEmailAndPassword(auth, email, password); // Sign in user
    
    console.log("User logged in:", res); // Optional: Log response for debugging
    return true;
  } catch (error: any) {
    toast(error.message, 4000); // Show error message to the user via toast
    return false; // Indicate failure
  }
}

// Function to register a new user
export async function registerUser(username: string, password: string): Promise<boolean> {
  const email = `${username}@codedamn.com`; // Construct email format
  try {
    const auth = getAuth(); // Initialize Firebase Auth
    const res = await createUserWithEmailAndPassword(auth, email, password); // Register new user
    
    console.log("User registered:", res); // Optional: Log response for debugging
    return true;
  } catch (error: any) {
    toast(error.message, 4000); // Show error message to the user via toast
    return false; // Indicate failure
  }
}

    

