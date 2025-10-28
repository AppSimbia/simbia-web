import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV ?
    "/integration"
    :
    import.meta.env.VITE_SQL_INTEGRATION_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;