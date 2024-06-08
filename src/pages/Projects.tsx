// src/pages/Project/Project.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const Project: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-2xl font-bold text-green-600">Project Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="bg-white shadow-md rounded-lg">
          <img src="path-to-image" alt="Project" className="object-cover rounded-t-lg" />
          <IonCardHeader className="bg-green-100">
            <IonCardTitle className="text-lg font-semibold text-green-700">Project Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="text-gray-800">Description of the project...</p>
            <IonButton expand="full" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Join Project</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Project;
