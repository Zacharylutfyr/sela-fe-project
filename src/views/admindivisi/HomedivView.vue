<template>
  <div class="d-flex">
    <Sidenavdiv />
    <div class="main-content">
      <Homediv />
      <Footer />
    </div>
  </div>
</template>


<script lang="js">
import Sidenavdiv from '../../components/includes/Sidenavdiv.vue'
import Homediv from '../../components/pages/Homediv.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
  name: "HomedivView",
  components: {
    Sidenavdiv, Homediv, Footer
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