// src/pages/Login/Login.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast } from '@ionic/react';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
      setToastMessage('Google Sign-In successful!');
      setShowToast(true);
    } catch (error) {
      handleError(error);
    }
  };

  const handleAppleSignIn = async () => {
    const auth = getAuth();
    const appleProvider = new OAuthProvider('apple.com');
    try {
      await signInWithPopup(auth, appleProvider);
      setToastMessage('Apple Sign-In successful!');
      setShowToast(true);
    } catch (error) {
      handleError(error);
    }
  };

  const handleEmailSignIn = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setToastMessage('Email Sign-In successful!');
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
          <IonTitle className="text-center">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding flex flex-col items-center justify-center h-full">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full max-w-sm mb-4"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
        <button
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded w-full max-w-sm mb-4"
          onClick={handleAppleSignIn}
        >
          Sign in with Apple
        </button>
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleEmailSignIn}
          >
            Sign in with Email
          </button>
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
