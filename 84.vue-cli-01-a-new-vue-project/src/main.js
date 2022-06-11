import { createApp } from 'vue';
import App from './App.vue';
// importing component
import FriendContact from './components/FriendContact.vue';


const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');
