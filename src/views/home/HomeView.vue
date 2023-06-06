<template>
  <SideNav/>
  <Footer/>

</template>

<script>
import SideNav from '../../components/includes/SideNav.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
  name: "HomeView",
  components: {
    SideNav, Footer
  },
};
</script>
