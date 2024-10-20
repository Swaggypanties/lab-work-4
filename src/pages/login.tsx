import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { loginUser } from '../firebaseConfig';

const login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
       const res = await loginUser(username,password)
       console.log(`${res ? 'Login success' : 'Login failed'}`)
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Movie app</IonTitle>
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
            </IonContent>
        </IonPage>
    );
};

export default login;