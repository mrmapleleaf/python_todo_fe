<template>
  <div>
    <h1>ToDo詳細</h1>
    <div v-if="todo">
      <h2>{{ todo.title }}</h2>
      <p>ステータス: {{ todo.is_completed ? '完了' : '未完了' }}</p>
      <p>作成日: {{ new Date(todo.created_at).toLocaleString() }}</p>
    </div>
    <RouterLink to="/todo/create">Todoを作成</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { getTodoDetail } from '@/composables/todoClient'
import { onMounted } from 'vue'
import { ToDo } from '@/types/todo';
import { ref } from 'vue';

const todo = ref<ToDo>();

const props = defineProps(
  {
    id: {
      type: String,
      required: true
    }
  }
)

onMounted(async () => {
  try {
    const response = await getTodoDetail(parseInt(props.id))
    todo.value = response.todo
  } catch(error) {
    console.error(error)
  }
  console.log(todo.value)
})
</script>