<template>
    <div class="d-flex">
        <Sidenav />
        <div class="main-content">
            <Formpengajuandiv />
            <Footer />
        </div>
    </div>
</template>

<script>
import Sidenav from '../../components/includes/Sidenav.vue'
import Formpengajuandiv from '../../components/pages/Formpengajuandiv.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
    name: "FormpengajuandivView",
    components: {
        Sidenav, Formpengajuandiv, Footer
    },
};
</script>

<style>
.main-content {
    flex: 1;
    /* Allow the main content to expand and fill the remaining space */
}
</style>
  