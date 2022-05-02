import React from 'react';
import { IonItem, IonLabel, IonReorder, IonReorderGroup, IonContent} from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

export const ReorderSongs: React.FC = () => (
  <IonContent>
    {/*-- The reorder gesture is disabled by default, enable it to drag and drop items --*/}
    <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
      {/*-- Default reorder icon, end aligned items --*/}
      <IonReorder>
        <IonItem>
          <IonLabel>Song 1</IonLabel>
          <IonLabel className="ion-text-right" color="medium">Artist</IonLabel>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>Song 2</IonLabel>
          <IonLabel className="ion-text-right" color="medium">Artist</IonLabel>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>Song 3</IonLabel>
          <IonLabel className="ion-text-right" color="medium">Artist</IonLabel>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>Song 4</IonLabel>
          <IonLabel className="ion-text-right" color="medium">Artist</IonLabel>
        </IonItem>
      </IonReorder>

      {/*-- Items wrapped in a reorder, entire item can be dragged --*/}
      <IonReorder>
        <IonItem>
          <IonLabel>Song 5</IonLabel>
          <IonLabel className="ion-text-right" color="medium">Artist</IonLabel>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>Song 6</IonLabel>
          <IonLabel className="ion-text-right" color="medium">Artist</IonLabel>
        </IonItem>
      </IonReorder>
    </IonReorderGroup>
  </IonContent>
);