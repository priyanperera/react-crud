import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5083/api",
  headers: {
    "content-type": "application/json",
  },
});
