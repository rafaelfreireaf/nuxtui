<script setup lang="ts">
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { messaging } from './plugins/firebase';


onMounted(() => {
  const messaging = getMessaging();
  
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
});

const authenticate = async () => {
  await signInAnonymously(getAuth())
  activated()
} 

const activated = async () => {
  const token = await getToken(messaging, { 
    vapidKey: 'BPz5PnaIeRx4ilebd0CYMv-yc-XgPxNe7Grj_0hfucIQaShN5pLq6s-eVuGOBcihtkNZZWNOq6tvxlJu9hDaM0w' 
  });


  if(token) {
    console.log(token);
  } else {
    // Request permission
  }

} 
</script>

<template>
  <div>
    <h1>Push Notification</h1>
    <button @click="authenticate">Authenticate</button>
  </div>
</template>