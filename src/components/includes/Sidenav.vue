<template lang="">
  <div class="sidenavcakep">
    <div id="page-top">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon">
            <i class="fab fa-stripe-s"></i>
          </div>
          <div class="sidebar-brand-text mx-3">SELA</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Admin MAT</div>

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <router-link
            to="/homemat"
            class="nav-link"
            :class="{ 'router-link-active': isActive('/homemat') }"
          >
            <i class="fas fa-home"></i>
            Dashboard
          </router-link>
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fas fa-list-ul"></i>
            List Pengajuan</a
          >
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">

              <router-link
            to="/stockmanagement"
            class="nav-link"
            :class="{ 'router-link-active': isActive('/stockmanagement') }"
          >
            <i class="fas fa-laptop"></i>
            Manajemen Stok
          </router-link>

        </li>
        <!-- Nav Item - Device -->
        <li class="nav-item">
          <router-link
            to="/formdevicemat"
            class="nav-link"
            :class="{ 'router-link-active': isActive('/formdevicemat') }"
          >
            <i class="fas fa-laptop"></i>
            Devices
          </router-link>
        </li>
        <!-- Nav Item - Spek -->
        <li class="nav-item">
          <router-link
            to="/formspekmat"
            class="nav-link"
            :class="{ 'router-link-active': isActive('/formspekmat') }"
          >
            <i class="fas fa-microchip"></i>
            Specification
          </router-link>
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fas fa-history"></i>
            History</a
          >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Admin Divisi</div>

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <router-link
            to="/homediv"
            class="nav-link"
            :class="{ 'router-link-active': isActive('/homediv') }"
          >
            <i class="fas fa-home"></i>
            Dashboard
          </router-link>
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <router-link
            to="/formpengajuandiv"
            class="nav-link"
            :class="{ 'router-link-active': isActive('/formpengajuandiv') }"
          >
            <i class="fas fa-paper-plane"></i>
            Form Pengajuan
          </router-link>
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <a class="nav-link" href="index_.html">
            <i class="fas fa-list-ul"></i>
            List Pengajuan</a
          >
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <a class="nav-link" href="index_.html">
            <i class="far fa-compass"></i>
            Tracking</a
          >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
        <div class="marbot"></div>
      </ul>
      <!-- End of Sidebar -->
    </div>
  </div>
</template>
<script lang="ts">
import { useRoute } from "vue-router";
import router from "../../router";

export default {
<<<<<<< HEAD:src/components/includes/Sidenav.vue
    name: "Sidenav",
    methods: {
        isActive(route: string) {
            const currentRoute = useRoute();
            return currentRoute.path === route || currentRoute.path === route + '/';
        },
    }
}
=======
  name: "Side_nav",
  methods: {
    isActive(route: string) {
      const currentRoute = useRoute();
      return currentRoute.path === route || currentRoute.path === route + "/";
    },
  },
};
>>>>>>> 9dfc4e6f7510f23382c138c0c771dccea32fc405:src/components/includes/Side_nav.vue
</script>
<style lang="css" scoped>
.navbar-nav {
  height: 100%;
}
<<<<<<< HEAD:src/components/includes/Sidenav.vue

a.active,
a.i {
    font-weight: 500;
    color: white;
    background-color: #023C40;
    opacity: 0.8;
=======
a.active,
a.i {
  font-weight: 500;
  color: white;
  background-color: black;
  opacity: 0.6;
>>>>>>> 9dfc4e6f7510f23382c138c0c771dccea32fc405:src/components/includes/Side_nav.vue
}

/* .sidenavcakep {
    width: min-content;
} */
</style>
