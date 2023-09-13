import "./assets/styles/main.scss";

import { createApp } from 'vue';
import App from "./App.vue";
import store from "./stores/userData";

const app = createApp(App);
app.mount('#app');
app.use(store);

