import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV ?
    "/mongo"
    :
    import.meta.env.VITE_MONGODB_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;