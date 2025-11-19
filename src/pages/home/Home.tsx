import { IonAvatar, IonButton, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [isVisible,setIsVisible] = useState(false);
  const [items, setItems] = useState<string[]>([]);

const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {

    console.log("composant chargé");
    generateItems();
  },[])
  return (

    <IonPage>
      <div className='mt-9'>


      <IonContent fullscreen className='ion-pading'>


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
      </div>

      <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem key={item}>
            <IonAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
            </IonAvatar>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(event) => {
          generateItems();
          setTimeout(() => event.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>

    </IonPage>
  );
};

export default Home;
