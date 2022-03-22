/* ----- IMPORT:PACKAGES------------------------- */
import { createApp } from "vue";
import App from "./App.vue"

import "./assets/scss/_variables/import.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
// import "./components";

createApp(App).mount("#app");
