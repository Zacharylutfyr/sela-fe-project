import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import ForgotPassword from "@/components/auth/ForgotPassword.vue";
import NotFound from "@/components/pages/NotFound.vue";
import Homediv from "@/views/admindivisi/HomedivView.vue";
import Formpengajuandiv from "@/views/admindivisi/FormpengajuandivView.vue";
import Tracking from "@/views/admindivisi/TrackingView.vue";
import Form_device_view from "@/views/admin_mat/Form_device_view.vue";
import Form_spek_view from "@/views/admin_mat/Form_spek_view.vue";
import Homemat from "@/views/admin_mat/Home_mat_view.vue";
import Listpengajuanmat from "@/views/admin_mat/List_pengajuan_view.vue";
import Stock_management from "@/views/admin_mat/Stock_management_view.vue"
import  Tracking_view from "@/views/admindivisi/TrackingView.vue"

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
    path: "/homemat",
    name: "HomematView",
    component: Homemat,
  },
  {
    path: "/listpengajuanmat",
    name: "ListpengajuanmatView",
    component: Listpengajuanmat,
  },
  {
    path: "/formpengajuandiv",
    name: "FormpengajuandivView",
    component: Formpengajuandiv,
  },
  {
    path: "/tracking",
    name: "TrackingView",
    component: Tracking,
  },
  {
    path: "/formdevicemat",
    name: "formdevicematView",
    component: Form_device_view,
  },
  {
    path: "/stockmanagement",
    name: "StockManagementView",
    component: Stock_management,
  },
  {
    path: "/formspekmat",
    name: "formspekView",
    component: Form_spek_view,
  },
  {
    path: "/tracking",
    name: "TrackingView",
    component: Tracking_view,
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
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});



// const isAuthenticated = true;

// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
//   if (to.name === "Login" && isAuthenticated) next({ name: "Home" });
//   else next();
// });

export default router;
