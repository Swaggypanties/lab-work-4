import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Movie app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center ion-justify-content-center ion-align-items-center" fullscreen>
        <div className='button-container'>
          <IonButton routerLink='/login'>Login</IonButton>
          <IonButton routerLink='/register' color='secondary'> Register</IonButton>
          <IonButton routerLink='/moviepage'>Search Movies</IonButton>
        </div>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
