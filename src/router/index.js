import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import MediaIndex from "../views/MediaIndexView.vue";
import MediaShow from "../views/MediaShowVue.vue";

const routes = [
  // { path: "/about", name: "about", component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue") },
  { path: "/", name: "home", component: HomeView },
  { path: "/media", name: "media-index", component: MediaIndex },
  { path: "/media/:id", name: "media-show", component: MediaShow },
  // { path: "/trackers", name: "trackers-index", component: MediaIndex },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
