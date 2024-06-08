// src/pages/Profile/Profile.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonAvatar, IonLabel, IonItem, IonList, IonButton } from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-2xl font-bold text-green-600">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="bg-white shadow-md rounded-lg">
          <IonCardHeader className="bg-green-100">
            <IonCardTitle className="text-lg font-semibold text-green-700">Profile Information</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem className="mb-4">
              <IonAvatar slot="start" className="rounded-full">
                <img src="path-to-avatar-image" alt="Profile" className="object-cover rounded-full" />
              </IonAvatar>
              <IonLabel className="ml-2">
                <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
                <p className="text-sm text-gray-600">john.doe@example.com</p>
              </IonLabel>
            </IonItem>
            <IonList className="mb-4">
              <IonItem>
                <IonLabel className="text-gray-800">Green Points</IonLabel>
                <IonLabel slot="end" className="text-green-600">150</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel className="text-gray-800">Achievements</IonLabel>
                <IonLabel slot="end" className="text-green-600">3 Badges</IonLabel>
              </IonItem>
            </IonList>
            <IonButton expand="full" routerLink="/edit-profile" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">Edit Profile</IonButton>
            <IonButton expand="full" color="danger" className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log Out</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
