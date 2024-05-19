import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const Resources: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Resource Sharing</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img src="path-to-resource-image" alt="Resource" />
                </IonThumbnail>
                <IonLabel>
                  <h2>Resource Name</h2>
                  <p>Description of the resource...</p>
                  <p>Available: Yes/No</p>
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
