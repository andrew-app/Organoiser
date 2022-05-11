import { IonItem, IonLabel, IonReorder, IonReorderGroup, IonContent} from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';
import { SongElement } from './SongElement';
function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log('Dragged from index', event.detail.from + 1, 'to', event.detail.to + 1);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

function PlaylistLength(event: CustomEvent<ItemReorderEventDetail>) {
  console.log(document.querySelectorAll(".song").length)
  event.detail.complete();
}

export function ReorderSongs(){
  const songs = [];  
  for(let i = 0;i < 10;i++) {
    songs.push(<SongElement key={i}/>);
  }

  return(
  <IonContent>
    {/*-- The reorder gesture is disabled by default, enable it to drag and drop items --*/}
    <IonReorderGroup className='playlist' disabled={false} onIonItemReorder={doReorder}>
      {songs}
    </IonReorderGroup>
  </IonContent>
);
}