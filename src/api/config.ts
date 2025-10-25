import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV ?
    "/api"
    :
    import.meta.env.VITE_SQL_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;