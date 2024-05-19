import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonAvatar, IonLabel, IonItem, IonList, IonButton } from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Profile Information</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonAvatar slot="start">
                <img src="path-to-avatar-image" alt="Profile" />
              </IonAvatar>
              <IonLabel>
                <h2>John Doe</h2>
                <p>john.doe@example.com</p>
              </IonLabel>
            </IonItem>
            <IonList>
              <IonItem>
                <IonLabel>Green Points</IonLabel>
                <IonLabel slot="end">150</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Achievements</IonLabel>
                <IonLabel slot="end">3 Badges</IonLabel>
              </IonItem>
            </IonList>
            <IonButton expand="full" routerLink="/edit-profile">Edit Profile</IonButton>
            <IonButton expand="full" color="danger">Log Out</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
