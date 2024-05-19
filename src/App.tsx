import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, leaf, cart, people, person } from 'ionicons/icons';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Marketplace from './pages/Marketplace';
import Resources from './pages/Resources';
import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/projects" component={Projects} exact={true} />
          <Route path="/marketplace" component={Marketplace} exact={true} />
          <Route path="/resources" component={Resources} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
          <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="projects" href="/projects">
            <IonIcon icon={leaf} />
            <IonLabel>Projects</IonLabel>
          </IonTabButton>
          <IonTabButton tab="marketplace" href="/marketplace">
            <IonIcon icon={cart} />
            <IonLabel>Marketplace</IonLabel>
          </IonTabButton>
          <IonTabButton tab="resources" href="/resources">
            <IonIcon icon={people} />
            <IonLabel>Resources</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
