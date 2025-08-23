import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos/?_limit=10";


export const fetchTodoApi = async () => {
    const res = await axios.get(API_URL);
    return res.data
}