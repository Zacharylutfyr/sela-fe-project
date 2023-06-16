<template>
    <div class="d-flex">
        <Sidenav />
        <div class="main-content">
            <Formspekmat />
            <!-- <Footer /> -->
        </div>
    </div>
</template>

<script lang="js">
import Sidenav from '../../components/includes/Sidenav.vue'
import Formspekmat from '../../components/pages/Form_spek.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
    name: "Form_spek_view",
    components: {
        Sidenav, Formspekmat, Footer
    },
};
</script>

<style>
.main-content {
    flex: 1;
    /* Allow the main content to expand and fill the remaining space */
}
</style>
  