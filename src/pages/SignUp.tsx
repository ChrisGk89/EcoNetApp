// src/pages/SignUp/SignUp.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonToast } from '@ionic/react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSignUp = async () => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setToastMessage('User created successfully!');
      setShowToast(true);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error: unknown) => {
    let errorMessage = 'An error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    setToastMessage(errorMessage);
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-2xl font-bold text-green-600">Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding flex flex-col items-center justify-center h-full">
        <IonItem className="w-full max-w-md mb-4">
          <IonLabel position="floating" className="text-gray-700">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </IonItem>
        <IonItem className="w-full max-w-md mb-4">
          <IonLabel position="floating" className="text-gray-700">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </IonItem>
        <IonButton
          expand="full"
          onClick={handleSignUp}
          className="w-full max-w-md bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </IonButton>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
          className="max-w-md"
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
