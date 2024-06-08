// src/pages/Resources/Resources.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const Resources: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-2xl font-bold text-green-600">Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="bg-white shadow-md rounded-lg">
          <IonCardHeader className="bg-green-100">
            <IonCardTitle className="text-lg font-semibold text-green-700">Resource Sharing</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem className="mb-4">
                <IonThumbnail slot="start" className="rounded-full">
                  <img src="path-to-resource-image" alt="Resource" className="object-cover rounded-full" />
                </IonThumbnail>
                <IonLabel className="ml-2">
                  <h2 className="text-lg font-semibold text-gray-800">Resource Name</h2>
                  <p className="text-sm text-gray-600">Description of the resource...</p>
                  <p className="text-sm text-gray-600">Available: Yes/No</p>
                </IonLabel>
              </IonItem>
              {/* Repeat IonItem for more resources */}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Resources;
