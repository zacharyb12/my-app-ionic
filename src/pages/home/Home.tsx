import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [isVisible,setIsVisible] = useState(false);

  useEffect(() => {

    console.log("composant chargé");
    
    return ()=> {
      // action de nettoyage au dechargement du component
    }
  },[])
  return (

    <IonPage>

      <IonContent fullscreen className='ion-pading'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HomePage</IonTitle>
        </IonToolbar>
      </IonHeader>


        <div className="card">
          <h2>Hello ionic</h2>
        </div>

        <IonButton shape="round" onClick={() => setIsVisible(!isVisible)}>
          Toggle Visibility
        </IonButton>

        <IonButton fill="clear" onClick={() => setIsVisible(!isVisible)}>
          Toggle Visibility
        </IonButton>

        {isVisible ? (
          <div>
            <p>est visible</p>
          </div>
        ): (
          <p>n'est pas visible</p>
        )}
      </IonContent>

    </IonPage>
  );
};

export default Home;
