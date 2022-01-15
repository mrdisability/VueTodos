<template>
    <form @submit.prevent="submit">
        <input type="text" class="form-control" id="todo" placeholder="Todo" name="todo" v-model="todo">
        <div class="form-check" style="margin-left: 10px">
            <input class="form-check-input" type="checkbox" 
              v-model="completed" id="completed">
            <label class="form-check-label" for="completed">
                Completed
            </label>
        </div>
        <button style="float: right" class="btn btn-primary">Update</button>
    </form>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {useRouter, useRoute} from "vue-router";
import {Todo} from "@/classes/todo";

export default {
    name: 'TodosCreate',
    setup() {
    const todo = ref('');
    const completed = ref(false);
    const router = useRouter();
    const {params} = useRoute();

    //Could have used localStorage to get data to update similar to react

    onMounted(async () => {
      const todoCall = await axios.get(`todos/${params.id}`);
      const todoItem: Todo = todoCall.data;

      //console.log(todoItem);

      todo.value = todoItem.todo;
      completed.value = todoItem.completed;
    });

    const submit = async () => {
      await axios.put(`todos/${params.id}`, {
        todo: todo.value,
        completed: completed.value
      });
      await router.push('/');
    }

    return {
      todo,
      submit,
      completed
    }
  }
}
</script>