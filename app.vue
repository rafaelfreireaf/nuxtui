<script setup lang="ts">
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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



// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

getToken(messaging, { vapidKey: 'BPz5PnaIeRx4ilebd0CYMv-yc-XgPxNe7Grj_0hfucIQaShN5pLq6s-eVuGOBcihtkNZZWNOq6tvxlJu9hDaM0w' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log('Token is: currentToken')
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
</script>

<template>
  <div>Vue Notification</div>
</template>