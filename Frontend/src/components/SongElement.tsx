import { IonItem, IonLabel, IonReorder, IonReorderGroup, IonContent} from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';



export function SongElement(){
    return(
        <IonReorder className='song'>
        <IonItem>
          <IonLabel>Song</IonLabel>
          <IonLabel className="ion-text-right" color="medium">Artist</IonLabel>
        </IonItem>
      </IonReorder>
    );
};