import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/"
      : "https://dash-go-nine.vercel.app/api/",
});

export default api;
