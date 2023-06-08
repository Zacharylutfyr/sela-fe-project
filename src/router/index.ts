import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import ForgotPassword from "@/components/auth/forgot_password.vue";
import NotFound from "@/components/pages/not_found.vue";
import Homediv from "@/views/admindivisi/home_div_view.vue";
import Formpengajuandiv from "@/views/admindivisi/form_pengajuan_div_view.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/homediv",
    name: "HomedivView",
    component: Homediv,
  },
  {
    path: "/formpengajuandiv",
    name: "FormpengajuandivView",
    component: Formpengajuandiv,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



// const isAuthenticated = true;

// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
//   if (to.name === "Login" && isAuthenticated) next({ name: "Home" });
//   else next();
// });

export default router;
