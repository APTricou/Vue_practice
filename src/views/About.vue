<template>
  <div>
    <h1>This is my project of increasing Vue ability.</h1>
    <h2>
      Each page has a new aspect of growth. From Hello World, to basic SPA to
      video player (coming)
    </h2>
    <h2>This app is just about the journey. Come along with me.</h2>
    <h3>By Antanas Tricou</h3>
    <Footer date="Apr 29th, 2020" />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped></style>
