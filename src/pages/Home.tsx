// src/pages/Home/Home.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-2xl font-bold text-green-600">EcoNet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding flex flex-col space-y-4">
        <IonCard className="shadow-lg">
          <IonCardHeader className="bg-green-100">
            <IonCardTitle className="text-lg font-semibold text-green-700">Featured Projects</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {/* Add carousel or list of featured projects */}
            <div className="text-gray-600">Add carousel or list of featured projects</div>
          </IonCardContent>
        </IonCard>
        <IonCard className="shadow-lg">
          <IonCardHeader className="bg-blue-100">
            <IonCardTitle className="text-lg font-semibold text-blue-700">Recent Activity</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {/* Add recent activity feed */}
            <div className="text-gray-600">Add recent activity feed</div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
