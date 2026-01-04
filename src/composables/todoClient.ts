import axios from 'axios';

const apliClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false,
});

export const getTodos = async () => {
  const response = await apliClient.get('/todos');
  return response.data;
}

export const createTodo = async (title: string, is_completed: boolean) => {
  const response = await apliClient.post('/todo/create', { title, is_completed });
  return response.data;
}

export const getTodoDetail = async (id: number) => {
  const response = await apliClient.get(`/todo/${id}`);
  return response.data;
}