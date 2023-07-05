<template>
    <div class="d-flex">
        <Sidenavdiv />
        <div class="main-content">
            <Formpengajuandiv />
            <Footer />
        </div>
    </div>
</template>

<script lang="js">
import Sidenavdiv from '../../components/includes/Sidenavdiv.vue'
import Formpengajuandiv from '../../components/pages/Formpengajuandiv.vue'
import Footer from '../../components/includes/Footer.vue'

export default {
    name: "FormpengajuandivView",
    components: {
        Sidenavdiv, Formpengajuandiv, Footer
    },
};
</script>

<style>
/* .main-content {
    flex: 1;
} */
</style>
  