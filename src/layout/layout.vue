<template>
  <div class="layout">
    <HeaderComp />

    <router-view />

    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from '@/layout/header.vue';
import FooterComp from '@/layout/footer.vue';

export default {
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style scoped>

</style>
