import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TodosList from '@/components/todos/TodosList.vue';
import TodosCreate from '@/components/todos/TodosCreate.vue';
import TodosEdit from '@/components/todos/TodosEdit.vue';

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: TodosList},
  {path: '/todos/create', component: TodosCreate},
  {path: '/todos/:id/edit', component: TodosEdit}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
