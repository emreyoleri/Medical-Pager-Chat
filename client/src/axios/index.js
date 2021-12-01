import axios from "axios";

const API = axios.create({
  baseURL: "https://medical-pager-be.herokuapp.com",
});

export default API;
