import { IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonAlert, useIonLoading } from '@ionic/react';
import { useEffect, useState} from 'react';
import { SearchResult, SearchType, useApi } from '../hooks/useApi';
import { gameControllerOutline, tvOutline, videocamOutline } from 'ionicons/icons';
import React from 'react';

const moviepage: React.FC = () => {
  const { searchData } = useApi()

  const [searchTerm, setSearchTerm] = useState('')
  const [type, setType] = useState<SearchType>(SearchType.all)
  const [results, setResults] = useState<SearchResult[]>([])
  const [presentAlert] = useIonAlert()
  const [loading, dismiss] = useIonLoading()

  useEffect(() => {
    if (searchTerm === '') {
      setResults([])
      return
    }

    const loadData = async() => {
      await loading()
      const result: any = await searchData(searchTerm, type)
      console.log(" ~ file: Home.tsx:31 ~ loadData ~ result", result)
      await dismiss()

      if (result?.Error) {
        presentAlert(result.Error)
      } else {
        setResults(result.Search)
      }
    }
    loadData()
  }, [searchTerm, type])



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>My Movie App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar 
          value={searchTerm}
          debounce={300}
          onIonChange={(e) => setSearchTerm(e.detail.value!)}>
        </IonSearchbar>

        <IonSegment value={type} onIonChange={(e) => setType(e.detail.value as SearchType)}>
          <IonSegmentButton value={SearchType.movie}>
            <IonLabel>Movies</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value={SearchType.series}>
            <IonLabel>Series</IonLabel>
          </IonSegmentButton>
        </IonSegment>

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
  )
}

export default moviepage;
