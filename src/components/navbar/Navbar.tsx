import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonButton } from "@ionic/react";
import { Link } from "react-router-dom";
import { useIonRouter } from "@ionic/react";



const Navbar : React.FC = () => {
    const router = useIonRouter();
    return (
        <>
        <IonMenu side="end" contentId="main-content">
            <IonHeader>
                <IonToolbar>
                <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem><Link to="/home">Home</Link></IonItem>
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