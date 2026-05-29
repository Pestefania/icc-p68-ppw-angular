import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

// Importaciones oficiales de Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC8GnEG5xb09PiBS4zqsPsZo1mWEjlY3Oo',
  authDomain: 'practica-d72c3.firebaseapp.com',
  projectId: 'practica-d72c3',
  storageBucket: 'practica-d72c3.firebasestorage.app',
  messagingSenderId: '57019970498',
  appId: '1:57019970498:web:8c8df4ab40d7c0d1cedc5b',
  measurementId: 'G-33B4E31JC4',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),

    // Inicializadores globales de Firebase unificados
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ppw-angular-21-4af97',
        appId: '1:173015093137:web:3fa85b88f354c0943cd430',
        storageBucket: 'ppw-angular-21-4af97.firebasestorage.app',
        apiKey: 'AIzaSyAqiTLNo7ZEWswX8IbSipjCBng9mvzS96w',
        authDomain: 'ppw-angular-21-4af97.firebaseapp.com',
        messagingSenderId: '173015093137',
        measurementId: 'G-NPBZ0T9VZ0',
        projectNumber: '173015093137',
        version: '2',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
