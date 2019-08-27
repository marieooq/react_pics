import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6cdc4f1d676458f8508f17781c3a3ad8349a6c5ecd6cd1e8ae60cb82ef212993"
  }
});
