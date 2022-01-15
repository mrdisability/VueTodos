import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

//Laravel backend: http://127.0.0.1:8000/api/

//Ruby on Rails backend: http://127.0.0.1:3000/todos

axios.defaults.baseURL = 'http://127.0.0.1:3000/';

createApp(App).use(store).use(router).mount('#app')
