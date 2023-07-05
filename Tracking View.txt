<template>
    <div class="d-flex">
      <Sidenav />
      <div class="main-content">
        <Tracking />
        <Footer />
      </div>
    </div>
  </template>
  
  
  <script lang="js">
  import Sidenav from '../../components/includes/Side_nav.vue'
  import Tracking from '../../components/pages/Tracking.vue'
  import Footer from '../../components/includes/Footer.vue'
  
  export default {
    name: "TrackingView",
    components: {
      Sidenav, Tracking, Footer
      // Footer belum
    },
  };
  </script>
  
  <style>
  .main-content {
    flex: 1;
    /* Allow the main content to expand and fill the remaining space */
  }
  </style>