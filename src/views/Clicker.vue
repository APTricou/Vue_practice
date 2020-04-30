<template>
  <div>
    <h1>{{ num }}</h1>
    <div class="button" v-on:click="increment">click to increase</div>
    <Footer date="Apr 29th 2020" />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    increment() {
      return (this.num += 1);
    },
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  border: 0.2rem black solid;
  border-radius: 1rem;
  text-transform: capitalize;
  height: 2rem;
  width: auto;
  padding: 1rem;
  user-select: none;
  background-color: white;
  transition: background-color 1s ease;
}

.button:hover {
  background-color: aqua;
}
</style>
