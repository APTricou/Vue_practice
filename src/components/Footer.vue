<template>
  <div>Created on {{ date }}</div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['date'],
};
</script>

<style scoped>
div {
  text-transform: uppercase;
  color: darkorchid;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #42b883;
  font-weight: bold;
}
</style>
