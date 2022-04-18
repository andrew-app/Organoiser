import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import { ReorderSongs } from '../components/ReorderSongs';
import { ReorderButton } from '../components/ReorderButton';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <div className="ion-text-center">
          <IonTitle className="title" color="success">Organoiser</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <ReorderSongs/>
      </IonContent>
      <ReorderButton/>
    </IonPage>
  );
};

export default Home;
