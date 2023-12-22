<script setup lang="ts">
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';


const authenticate = async () => {
  await signInAnonymously(getAuth())
  activated()
} 

const activated = async () => {
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
} 


onMounted(() => {
  const messaging = getMessaging();

  onMessage(messaging, (payload) => {
   console.log('Message received. ', payload);
    // ...
  });

})


</script>

<template>
  <div>
    <h1>Push Notification</h1>
    <button @click="authenticate">Authenticate</button>
  </div>
</template>