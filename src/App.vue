<template>

  <NavBar />

  <!-- <TodosList /> -->

  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';
//import TodosList from './components/todos/TodosList.vue';

export default {
  name: "App",
  components: {
    NavBar,
    //TodosList
  }
}
</script>

