<script setup lang="ts">

import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';


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
  const messaging = getMessaging(app);

console.log('fdfdfd', messaging)

// onMounted(() => {
//   const messagingTest = getMessaging();
  
//   onMessage(messagingTest, (payload) => {
//     console.log('Message received. ', payload);
//     // ...
//   });
// });

// const authenticate = async () => {
//   await signInAnonymously(getAuth())
//   activated()
// } 

// const activated = async () => {
//   const token = await getToken(messaging, { 
//     vapidKey: 'BPz5PnaIeRx4ilebd0CYMv-yc-XgPxNe7Grj_0hfucIQaShN5pLq6s-eVuGOBcihtkNZZWNOq6tvxlJu9hDaM0w' 
//   });


//   if(token) {
//     console.log(token);
//   } else {
//     // Request permission
//   }

// } 
</script>

<template>
  <div>
    <h1>Push Notification</h1>
    <!-- <button @click="authenticate">Authenticate</button> -->
  </div>
</template>