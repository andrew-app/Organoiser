import React from 'react';
import {IonButton, IonText} from '@ionic/react';
import "./ReorderButton.css"

export const ReorderButton: React.FC = () => (

<div className="Reorder ion-text-center">
<IonButton color="success" shape="round">
    <IonText color="dark"> Reorder Playlist </IonText>
</IonButton>
</div>
);
