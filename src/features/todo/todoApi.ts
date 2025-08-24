import axios from "axios";
import type { Todo } from "./todoTypes";

const API_URL = "https://jsonplaceholder.typicode.com/todos/?_limit=10";

export const fetchTodoApi = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data as Todo[];
  } catch (error) {
    console.log(error);
  }
};
