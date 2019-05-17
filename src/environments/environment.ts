import * as firebase from 'firebase';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 firebase: {
  apiKey: 'AIzaSyBX3GFZ2pOw1GngdYoX8T6bjBosoyXmOIY',
  authDomain: 'incidentes-20b5e.firebaseapp.com',
  databaseURL: 'https://incidentes-20b5e.firebaseio.com',
  projectId: 'incidentes-20b5e',
  storageBucket: 'incidentes-20b5e.appspot.com',
  messagingSenderId: '72789868618',
  appId: '1:72789868618:web:d17bb40b9a68b74f'
 }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
