import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>MovieApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center" fullscreen>
        <div className="home-content">
          <h1>Welcome to the MovieApp!</h1>
          <p>Discover a world of movies at your fingertips. By logging in or creating an account, you'll gain access to personalized movie searches, detailed film information, and the ability to explore your favorite movies, series, and episodes. Whether you're a fan of the latest blockbusters or hidden gems, MovieApp lets you search and find all the entertainment you're looking for in one place.</p>
          
          <div className='button-container'>
            <IonButton expand="block" routerLink='/login'>Login</IonButton>
            <IonButton expand="block" routerLink='/register' color='secondary'>Register</IonButton>
            <IonButton expand="block" routerLink='/moviepage' color='tertiary'>Search Movies</IonButton>
          </div>
        </div>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
