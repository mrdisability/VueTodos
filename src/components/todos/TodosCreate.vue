<template>
    <form @submit.prevent="submit">
        <input type="text" class="form-control" id="todo" placeholder="Todo" name="todo" v-model="todo">
        <button style="float: right" class="btn btn-primary">Save</button>
    </form>
</template>

<script lang="ts">
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
    name: 'TodosCreate',
    setup() {
    const todo = ref('');
    const router = useRouter();

    const submit = async () => {
      await axios.post('todos', {
        todo: todo.value,
        completed: false
      });
      await router.push('/');
    }

    return {
      todo,
      submit
    }
  }
}
</script>
