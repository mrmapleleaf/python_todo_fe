import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/todo/index.vue";
import Create from "../views/todo/create/index.vue";
import Detail from "../views/todo/detail/index.vue";

const routes = [
  { path: '/', component: Index },
  { path: '/todo/create', component: Create },
  { path: '/todo/:id', component: Detail, props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;