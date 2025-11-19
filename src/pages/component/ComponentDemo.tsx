import {  IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonInput, IonPage } from "@ionic/react"
import { heart,gridSharp } from 'ionicons/icons';
import { useState,useEffect } from "react";
import './ComponentDemo.css';


const ComponentDemo : React.FC = () => {

    const [inputValue, setInputValue] =  useState('initial');

    const showInput = () => {
        alert(inputValue);
    }



    useEffect(() => {
        console.log("ComponentDemo chargé");
  }, []);

    return (
        <IonPage>
            <div className="mt-5 text-center">
                <h2>Component Demo Page</h2>
            </div>

            <IonCard color="light">
                  <IonCardHeader>
                    <IonCardTitle>Bouttons</IonCardTitle>
                    <IonCardSubtitle>Exemples d'icones utilisés</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonButton expand="block" color="primary">Bouton principal</IonButton>
                    <IonButton expand="block" color="secondary">Bouton secondaire</IonButton>
                    <IonButton shape="round"><IonIcon slot="icon-only" icon={heart} /></IonButton>
                    <IonButton shape="round"><IonIcon slot="icon-only" icon={gridSharp} /></IonButton>
                    <IonButton shape="round"><IonIcon  name="dice-outline"></IonIcon></IonButton>
                  </IonCardContent>
            </IonCard> 

             <IonCard color="light">
                  <IonCardHeader>
                    <IonCardTitle>Inputs</IonCardTitle>
                    <IonCardSubtitle>Exemples d'inputs utilisés</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonInput label="Email" type="email" placeholder="Votre email" value={inputValue} onIonChange={e => setInputValue(e.detail.value!)} />
                    {inputValue}
                    <IonButton onClick={showInput}> Afficher la valeur</IonButton>
                  </IonCardContent>
            </IonCard> 

            <IonCard color="light">
                  <IonCardHeader>
                    <IonCardTitle>Badges</IonCardTitle>
                    <IonCardSubtitle>Exemples de badgesutilisés</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonBadge color="success">Badge</IonBadge>
                    <IonBadge color="primary">Badge</IonBadge>
                    <IonBadge color="secondary">Badge</IonBadge>
                    <IonBadge color="tertiary">Badge</IonBadge>
                    <IonBadge color="warning">Badge</IonBadge>
                    <IonBadge color="danger">Badge</IonBadge>

                  </IonCardContent>
            </IonCard>    

            <IonCard color="light">
                  <IonCardHeader>
                    <IonCardTitle>Breadcrumbs</IonCardTitle>
                    <IonCardSubtitle>Exemples de badgesutilisés</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                     <IonBreadcrumbs>
                      <IonBreadcrumb href="/home">Home</IonBreadcrumb>
                      <IonBreadcrumb href="/components">Composants</IonBreadcrumb>
                    </IonBreadcrumbs>

                  </IonCardContent>
            </IonCard> 

           

        </IonPage>
    )
}

export default ComponentDemo;