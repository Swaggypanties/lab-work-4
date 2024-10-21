import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";






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
const analytics = getAnalytics(app);

export async function loginUser(username: string, password: string) {
    const email = `${username}@codedamn.com`

    try {
        const res = await Firebase.auth().signInWithEmailAndPassword(email, password)
    
            console.log(res)
            return true

    } catch(error)  {
        toast(error.message, 4000)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`
    try {
        const res = await firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    }   catch(error) {
        toast(error.message, 4000)
        return false
    }
}
    

