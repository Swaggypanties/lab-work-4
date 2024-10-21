import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { loginUser } from '../firebaseConfig';
import { Link } from 'react-router-dom';


const login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
       const res = await loginUser(username, password)
       if (!res) {
            toast('Error logging with your credentials')
       } else {
        toast('You have logged in!')
       }
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonInput placeholder="Username" 
                onIonChange={(e: any) => setUsername(e.target.value)}/>
                <IonInput 
                type='password'
                placeholder="Password"
                onIonChange={(e: any) => setPassword(e.target.value)}/>

                <IonButton onClick={login}>Login</IonButton>

                <p> Don't have an account yet? <Link to="/register">Register</Link> </p>
            </IonContent>
        </IonPage>
    );
};

export default login;