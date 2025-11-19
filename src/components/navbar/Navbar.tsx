import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonButton } from "@ionic/react";
import { useIonRouter } from "@ionic/react";
// import { IonItem } from "@ionic/react";
// import { Link } from "react-router-dom";



const Navbar : React.FC = () => {
    const router = useIonRouter();
    return (
        <>
        {/* <div>
            <ul>
      <IonItem>
        <Link to="/home">Home</Link>
      </IonItem>
      <IonItem>
        <Link to="/component-demo">Component Demo</Link>
      </IonItem>
            </ul>
        </div> */}
        <IonMenu side="end" contentId="main-content">
            <IonHeader>
                <IonToolbar>
                <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonButton  onClick={() => router.push('/home')}>Home</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton onClick={() => router.push('/component-demo')}>Component</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton onClick={() => router.push('/list')}>List</IonButton>
                    </IonItem>
                </IonList>
                
                
            </IonContent>
        </IonMenu>

        <IonHeader slot="fixed">
            <IonToolbar>

          <IonButtons slot="start">
            <IonButton onClick={() => router.push('/home')}>Accueil</IonButton>
          </IonButtons>
          

          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>

        </IonToolbar>
        </IonHeader>

        </>
    )
}

export default Navbar;