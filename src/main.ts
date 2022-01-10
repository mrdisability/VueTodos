import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

//Dotnet backend: https://localhost:5001/api/todos

//Laravel backend: http://127.0.0.1:8000/api/

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

createApp(App).use(store).use(router).mount('#app')
