<template>
  <div>
    <h1>Create Todo</h1>
    <form method="POST" action="registerTodo" @submit.prevent="registerTodo">
      <div>
        <div class="form-content">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" v-model="title" />
        </div>
        <div class="form-content">
          <label for="is_completed">Completed</label>
          <input id="is_completed" name="is_completed" type="checkbox" v-model="is_completed" />
        </div>
      </div>
      <button type="submit">登録</button>
    </form>
    <RouterLink to="/">一覧に戻る</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createTodo } from '@/composables/todoClient';

const title = ref<string>('');
const is_completed = ref<boolean>(false);

async function registerTodo() {
  try {
    await createTodo(title.value, is_completed.value)
  } catch(error) {
    console.error(error)
  }
}
</script>