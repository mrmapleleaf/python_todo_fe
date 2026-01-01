<template>
  <div>
    <h1>Todo List</h1>
    <p>{{ test }}</p>

    <ul v-if="todos.length > 0">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <p v-else>Todoはありません</p>

    <RouterLink to="/todo/create">Todoを作成</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { getTodos } from '@/composables/todoClient'
import { onMounted } from 'vue'
import { ToDo } from '@/types/todo';
import { ref } from 'vue';

const test:string = "test"

const todos = ref<ToDo[]>([]);

onMounted(async () => {
  try {
    const response = await getTodos()
    todos.value = response.todos
  } catch(error) {
    console.error(error)
  }
  console.log(todos.value)
})
</script>