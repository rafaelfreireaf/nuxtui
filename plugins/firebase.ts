import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

  const firebaseConfig = {
    apiKey: "AIzaSyBa0nUo74uA2w6EMf5Y_iKzBiLwQZUdnJw",
    authDomain: "vue-notification-4a729.firebaseapp.com",
    projectId: "vue-notification-4a729",
    storageBucket: "vue-notification-4a729.appspot.com",
    messagingSenderId: "372119211975",
    appId: "1:372119211975:web:ed232e2519b9e99fd953e2",
    measurementId: "G-NFHCEVQGY5"
  };

const app = initializeApp(firebaseConfig);
 export const messaging = getMessaging(app);

