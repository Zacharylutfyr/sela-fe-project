<template>
    <div class="d-flex">
        <Sidenavmat />
        <div class="main-content">
            <Formspekmat />
            <Footer />
        </div>
    </div>
</template>

<script lang="js">
import Sidenavmat from '../../components/includes/Sidenavmat.vue'
import Formspekmat from '../../components/pages/Form_spek.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
    name: "Form_spek_view",
    components: {
        Sidenavmat, Formspekmat, Footer
    },
};
</script>

<style>
.main-content {
    flex: 1;
    /* Allow the main content to expand and fill the remaining space */
}
</style>
  