import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Aos from "aos";

import "./assets/main.css";
import "./assets/base.css";
import 'aos/dist/aos.css'

const app = createApp(App);
Aos.init()
app.use(router);
app.use(Aos)

app.mount("#app");
