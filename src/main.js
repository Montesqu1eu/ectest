import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import GlobalComponents from "./plugins/global-components";

const app = createApp(App).use(store).use(router);

GlobalComponents.register(app);

app.mount("#app");
