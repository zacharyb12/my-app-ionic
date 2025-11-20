import { IonButton, IonCard, IonInput, IonLabel, IonPage, IonTitle, useIonRouter, useIonViewWillEnter, useIonViewWillLeave } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const DetailsPage: React.FC = () => {

    // pour rediriger l'utilisateur : 
    const router = useIonRouter();

    // Pour récupérer des paramètres passés dans l'URL :
    const { id } = useParams<{ id: string }>();

    // valeur pour la modification de l'objet
    const [updatedTodo , setUpdatedTodo] = useState<string>('');

    useIonViewWillEnter(() => {
        // recuperation des données grace au paramètre récupéré dans le useParams
        // alert(`useIonViewWillEnter Details Page with id: ${id}`);
    })

    useIonViewWillLeave(() => {
        // alert(`useIonViewWillLeave Details Page with id: ${id}`);
    })

    useEffect(() => {
        // recuperation des données grace au paramètre récupéré dans le useParams
        // alert(`useEffect Details Page with id: ${id}`);

    }, [])

    // gestion de l'input-----------------------------------------------------------------

    const [inputValue , setInputValue] = useState<string>('');
    const [errorMessage , setErrorMessage] = useState<string>('');

    // gestion de la validation
    const handleInput = (e : CustomEvent) => {
        const value : string = e.detail.value;
        if(!value.includes('@')){
            setErrorMessage('Veuillez utiliser un email valide');
        }else{
            setErrorMessage('');
            setInputValue(value);
        }
    }

    // const sendInput = () => {
    //     // appel du service
    //     todoService.sendEmail(inputValue);
    // }

    return (
        <>
        <IonPage>
            <div className="mt-9">
                <p style={{backgroundColor:'white',color:'black'}}>id InLine : {id}</p>
                <p style={style.container}>id Objet Style : {id}</p>
                <IonButton onClick={() => router.push('/home')}>
                    Go to Home
                </IonButton>

                <IonCard>
                    <IonTitle>{updatedTodo}</IonTitle>
                    <IonInput  value={updatedTodo} onIonChange={(e) => setUpdatedTodo(e.detail.value!)} />

                    {/* <IonInput  value={updatedTodo} onIonChange={(e) => setUpdatedTodo({...todo , title : e.detail.value!} as Todo)} /> */}
                </IonCard>

                <IonCard>
                    <IonLabel>email</IonLabel>
                    <IonInput className="ion-text-center" value ={inputValue} onIonChange={(e) => handleInput(e)} />
                        {errorMessage.length > 0 && (<IonLabel style={{color : 'red'}}>{errorMessage}</IonLabel>)}
                </IonCard>
            </div>
        </IonPage>
        </>
    )
}

const style = {
    container : {
        marginTop : '2rem',
        backgroundColor : '#ff0000ff'
    }
}

export default DetailsPage;