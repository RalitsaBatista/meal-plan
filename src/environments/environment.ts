import { domain, clientId, audience, apiUrl } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
    audience,
  },
  dev: {
    apiUrl,
  },
  /*firebase : {
    apiKey: 'AIzaSyAc44R0KkRNmLVpWFxGO_XALeavRzqWEJ8',
    authDomain: 'meal-planner-ba3c5-default-rtdb.europe-west1.firebasedatabase.app',
    databaseURL: 'https://meal-planner-ba3c5-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'meal-planner-ba3c5',
    storageBucket: 'meal-planner-ba3c5-default-rtdb.appspot.com',
    //messagingSenderId: '4031356181',
    //appId: '1:4031356181:web:80d30bf4f9aedd9c6b9d1ca',
    //measurementId: 'G-J55PBZ43G5'
  },*/
};
