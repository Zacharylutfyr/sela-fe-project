<template>
    <div class="d-flex">
      <Sidenav />
      <div class="main-content">
        <listpengajuanmat />
        <Footer />
      </div>
    </div>
  </template>
  
  
  <script lang="js">
  import Sidenav from '../../components/includes/Side_nav.vue'
  import Listpengajuanmat from '../../components/pages/Listpengajuanmat.vue'
  import Footer from '../../components/includes/Footer.vue'
  
  export default {
    name: "ListpengajuanmatView",
    components: {
      Sidenav, Listpengajuanmat, Footer
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