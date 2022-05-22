import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.imersaofx.danieldcs.com/",
  headers: {
    Authorization: "Bearer Z2FicmllbHZpdG9yLmZyYXNhb0BnbWFpbC5jb20=",
  },
});
