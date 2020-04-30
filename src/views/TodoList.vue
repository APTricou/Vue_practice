<template>
  <div class="container">
    <div>
      <input v-model="textinput" type="text" />
      <button v-on:click="addTodo">Add todo</button>
    </div>
    <ul>
      <todo-item v-for="todo in todos" :key="todo.id" :text="todo.text" />
    </ul>
    <Footer date="Apr 29th 2020" />
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
import Footer from '../components/Footer';
export default {
  data() {
    return {
      todos: [],
      textinput: '',
      idcounter: 1,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.textinput, id: this.idcounter });
      this.textinput = '';
      this.idcounter++;
    },
  },
  components: {
    TodoItem,
    Footer,
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  margin: auto;
}

.control {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
