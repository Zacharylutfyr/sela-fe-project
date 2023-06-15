<template>
  <div class="d-flex">
    <Sidenav />
    <div class="main-content">
      <StockManagement />
      <Footer />
    </div>
  </div>
</template>


<script lang="js">
import Sidenav from '../../components/includes/Side_nav.vue'
import StockManagement from '../../components/pages/Stock_management.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
  name: "StockManagementView",
  components: {
    Sidenav, StockManagement, Footer
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