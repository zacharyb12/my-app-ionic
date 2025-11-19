import { IonList, IonItem, IonLabel, IonButton, IonInput } from "@ionic/react";
import { useState } from "react";
import './listcomponent.css';

const ListComponent : React.FC = () => {

    const [data , setData] = useState<string[]>([
        "premier",
        "deuxième",
        "troisième"
    ]);

    const [inputValue, setInputValue] = useState<string>('');

    const addItem = () => {
        setData([...data, inputValue]);
        setInputValue('');
    }

    const removeItem = (index : number) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    }

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
        </div>
    )
}

export default ListComponent;