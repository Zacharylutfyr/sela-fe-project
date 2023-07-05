<template>
    <div class="d-flex">
        <Sidenavmat />
        <div class="main-content">
            <Formdevicemat />
            <Footer />
        </div>
    </div>
</template>

<script lang="js">
import Sidenavmat from '../../components/includes/Sidenavmat.vue'
import Formdevicemat from '../../components/pages/Form_device.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
    name: "Form_device_view",
    components: {
        Sidenavmat, Formdevicemat, Footer
    },
};
</script>

<style>
.main-content {
    flex: 1;
    /* Allow the main content to expand and fill the remaining space */
}
</style>
  