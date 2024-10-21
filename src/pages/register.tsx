import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { loginUser } from '../firebaseConfig';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    function registerUser() {
       console.log(username, password, cpassword)
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonInput placeholder="Username" 
                onIonChange={(e: any) => setUsername(e.target.value)}/>
                <IonInput 
                type='password'
                placeholder="Password"
                onIonChange={(e: any) => setPassword(e.target.value)}/>

                <IonInput 
                type='password'
                placeholder="Confirm Password"
                onIonChange={(e: any) => setCPassword(e.target.value)}/>
                

                <IonButton onClick={registerUser}>Register</IonButton>

                <p> Already have an account? <Link to="/login">Login</Link> </p>

            </IonContent>
        </IonPage>
    );
};

export default Register;