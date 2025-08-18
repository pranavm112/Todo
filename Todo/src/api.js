import axios from "axios";

// Centralized axios instance with baseURL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
 // withCredentials: true,
});

// Todos API calls
export const getTodos = () => api.get("/todos");
export const addTodo = (todo) => api.post("/todos", todo);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);
export const updateTodo = (id, updatedTodo) => api.put(`/todos/${id}`, updatedTodo);


export default api; 