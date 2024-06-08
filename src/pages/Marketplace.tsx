// src/pages/Marketplace/Marketplace.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const Marketplace: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-2xl font-bold text-green-600">Marketplace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem className="bg-white shadow-md rounded-lg mb-4">
            <IonThumbnail slot="start" className="rounded-md">
              <img src="path-to-product-image" alt="Product" className="object-cover rounded-md" />
            </IonThumbnail>
            <IonLabel className="ml-2">
              <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
              <p className="text-sm text-gray-600">Product Description</p>
              <p className="text-lg font-semibold text-green-600">$Price</p>
            </IonLabel>
          </IonItem>
          {/* Repeat IonItem for more products */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Marketplace;
