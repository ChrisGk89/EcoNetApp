import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const Project: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Project Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <img src="path-to-image" alt="Project" />
          <IonCardHeader>
            <IonCardTitle>Project Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Description of the project...</p>
            <IonButton expand="full">Join Project</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Project;
