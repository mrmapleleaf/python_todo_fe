<template>
  <div>
    <h1>Todo List</h1>
    <p>{{ test }}</p>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>


    <RouterLink to="/todo/create">Create New Todo</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { getTodos } from '@/services/todoClient'
import { onMounted } from 'vue'
import { ToDo } from '@/types/todo';
import { ref } from 'vue';

const test:string = "test"

const todos = ref<ToDo[]>([]);

onMounted(async () => {
  try {
    todos.value = await getTodos()
  } catch(error) {
    console.error(error)
  }
  
  console.log(todos.value)
})
</script>