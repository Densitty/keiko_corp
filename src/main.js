import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "./assets/tailwind.css";
import router from "@/router";

const app = createApp(App).use(router);

library.add(faSearch);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
