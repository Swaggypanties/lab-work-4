import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonLabel, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar, useIonAlert, useIonLoading } from '@ionic/react';
import { useEffect, useState } from 'react';
import { SearchResult, SearchType, useApi } from '../hooks/useApi';
import React from 'react';
import './moviepage.css';

const MoviePage: React.FC = () => {
  const { searchData } = useApi();

  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState<SearchType>(SearchType.all);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [presentAlert] = useIonAlert();
  const [loading, dismiss] = useIonLoading();
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    if (searchTerm === '') {
      setResults([]);
      return;
    }

    const loadData = async () => {
      await loading();
      const result: any = await searchData(searchTerm, type);
      console.log(' ~ file: Home.tsx:31 ~ loadData ~ result', result);
      await dismiss();

      if (result?.Error) {
        presentAlert(result.Error);
      } else {
        setResults(result.Search);
      }
    };

    loadData();
  }, [searchTerm, type]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.length > 0) {
      setShowInstructions(false);
    } else {
      setShowInstructions(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>MovieApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchTerm}
          debounce={300}
          onIonChange={(e) => handleSearchChange(e.detail.value!)}
        ></IonSearchbar>

        <IonSegment
          value={type}
          onIonChange={(e) => setType(e.detail.value as SearchType)}
        >
          <IonSegmentButton value={SearchType.movie}>
            <IonLabel>Movies</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value={SearchType.series}>
            <IonLabel>Series</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {showInstructions && (
          <div className="instructions" style={{ padding: '16px', textAlign: 'center' }}>
           <p>
              Welcome to the MovieApp search page! Here, you can search for your favorite movies and series. 
              Simply type the name of a movie or series into the search bar above, and filter your results by selecting 
              either "Movies" or "Series" if you'd like to narrow your search.
            </p>
            <p>
              Once you've entered a search term, results will appear below. Click on any result to view more details about 
              the movie or series. Enjoy discovering new content!
            </p>
          </div>
        )}

        <IonGrid>
          <IonRow>
            {results.map((item: SearchResult) => (
              <IonCol size="6" size-md="4" key={item.imdbID}>
                <IonCard button routerLink={`/movies/${item.imdbID}`}>
                  <IonImg src={item.Poster} />
                  <IonCardHeader>
                    <IonCardTitle>{item.Title}</IonCardTitle>
                    <IonCardSubtitle>{item.Year}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MoviePage;
