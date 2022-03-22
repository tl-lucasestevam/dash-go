import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/"
      : "https://dashgo.lucasestevam.tech/api/",
});

export default api;
