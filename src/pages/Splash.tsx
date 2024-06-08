// src/pages/Splash/Splash.tsx
import React, { useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/login');
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent className="flex items-center justify-center h-full bg-green-100">
        <div className="splash-container flex flex-col items-center">
          <div className="eco-animation mb-4">
            {/* Your eco-themed animation here */}
            <img src="/assets/eco-logo.webp" alt="Eco Logo" className="eco-logo w-48 h-48" />
          </div>
          <h1 className="text-3xl font-bold text-green-700">Welcome to EcoNet</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
