import { IonList, IonItem, IonLabel, IonButton, IonInput, useIonRouter } from "@ionic/react";
import { useEffect, useState } from "react";
import './listcomponent.css';
import serviceLocal from "../../services/serviceLocal";

const ListComponent : React.FC = () => {
// les states local pour gérer les données
    const [data , setData] = useState<string[]>([]);

    const [inputValue, setInputValue] = useState<string>('');

    // fonction pour gérer la liste

    const addItem = () => {
        setData([...data, inputValue]);
        setInputValue('');
    }

    const removeItem = (index : number) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
        serviceLocal.setData(newData);
    }

    // useEffect est disponble
    useEffect(() => {
        const localData = serviceLocal.getData();
        setData(localData);

    },[data])

    // Le router de useIonRouter permet de rediriger l'utilisateur
    const router = useIonRouter();

    return (
        <div className="mt-8">

        <IonItem color="dark">
            <IonInput  value={inputValue} onIonChange={(e) => setInputValue(e.detail.value!)} />
        </IonItem>
        <IonButton onClick={addItem}>Add Item</IonButton>


         <IonList>

            {data.map((item, index) => (
                <IonItem key={index}>
                    <IonLabel>{item}</IonLabel>
                    <IonButton color="danger" onClick={()=> { removeItem(index)}}>
                        Remove
                    </IonButton>
                </IonItem>
            ))}
            
        </IonList>

        <h2>Redirection vers une page Details</h2>

        <IonButton onClick={() => router.push(`/details/${42}`)}>
            Accéder a la page détails
        </IonButton>
        </div>
    )
}

export default ListComponent;