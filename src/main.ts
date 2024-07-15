import { createApp, type Directive } from "vue";
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue';
import router from './router';
import './style.css'

createApp(App).use(ElementPlus).use(router).mount('#app');