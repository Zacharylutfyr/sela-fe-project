<template lang="">
  <div class="sidenavcakep">
    <div id="page-top">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-success sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <router-link
            to="/homediv"
            class="nav-link sidebar-brand d-flex align-items-center justify-content-center"
            :class="{ 'router-link-active': isActive('/homediv') }"
          >
          <div class="sidebar-brand-icon">
            <i class="fab fa-stripe-s"></i>
          </div>
          <div class="sidebar-brand-text mx-3">SELA</div>
          </router-link>

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
            <router-link
          to="/listpengajuanmat"
          class="nav-link"
          :class="{ 'router-link-active': isActive('/listpengajuanmat') }"
        >
            <i class="fas fa-list-ul"></i>
            List Pengajuan          
          </router-link>

        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
              <router-link
            to="/stockmanagement"
            class="nav-link"
            :class="{ 'router-link-active': isActive('/stockmanagement') }"
          >
          <i class="fas fa-box-open"></i>
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
  name: "Sidenavmat",
  methods: {
    isActive(route: string) {
      const currentRoute = useRoute();
      return currentRoute.path === route || currentRoute.path === route + '/';

    },
  },
};
</script>
<style lang="css">
.sidenavcakep {
  height: auto;
  background-color: #1cc88a;
}

a.isActive,
a.router-link-active,
a.i {
  font-weight: 500;
  color: white;
  background-color: #023C40;
  opacity: 0.8;
}
</style>
