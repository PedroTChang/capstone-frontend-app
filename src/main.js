import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "https://hidden-reef-58565.herokuapp.com"
    : "/";

//if (process.env.NODE_ENV === 'development') {
//	axios.defaults.baseURL = ? "https://localhost:8080" : "/"; 
//} else {
//	if (window.location.hostname === process.env.en

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

createApp(App).use(router).mount("#app");
