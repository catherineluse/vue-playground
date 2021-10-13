import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import config from './config';
import "./index.css";

const app = createApp(App)
    .use(router)
    .mount("#app");
