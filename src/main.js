import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

import './assets/css/reset.css'
import './assets/css/basic.css'
import './assets/css/common.css'
import './assets/css/style.css'

const app = createApp(App);
app.use(router)
app.mount('#app');