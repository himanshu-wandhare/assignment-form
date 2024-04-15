import axios from "axios";

//Call server api
export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
