import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import MediaIndex from "../views/MediaIndexView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/media", name: "media-index", component: MediaIndex },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  // { path: "/about", name: "about", component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
