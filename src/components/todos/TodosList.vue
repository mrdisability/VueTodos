<template>
    <ul class="list-group" v-for="todo in todos" :key="todo.id">
        <li class="list-group-item">
            <router-link :to="`/todos/${todo.id}/edit`">
                {{todo.todo}} 
            </router-link>

            <span style="margin-left: 10px" v-if="todo.completed" class="badge bg-success">Completed</span>

            <span style="margin-left: 10px" v-if="!todo.completed" class="badge bg-danger">Incomplete</span>

            <div style="float: right">
                <!-- <router-link :to="`/todos/${todo.id}/edit`" class="btn btn-secondary">
                    Edit
                </router-link> -->

                <button type="button" style="margin-left: 5px" class="btn btn-danger" @click="del(todo.id)">Delete</button>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {Entity} from "@/interfaces/entity";

export default {
    name: 'TodosList',
    setup() {
        const todos = ref([]);

        onMounted(async() => {
            const response = await axios.get('todos');

            todos.value = response.data;

            //console.log(todos.value);
        });

        const del = async (id: number) => {
            if (confirm('Are you sure you want to delete this todo?')) {
                await axios.delete(`todos/${id}`);
                todos.value = todos.value.filter((e: Entity) => e.id !== id);
            }
        }

        return {
            todos,
            del
        }
    }
}
</script>

