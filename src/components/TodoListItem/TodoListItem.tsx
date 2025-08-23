import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks/storeHooks";
import Button from "../Button/Button";
import { fetchData, removeTodo } from "../../features/todo/todoSlice";


const TodoListItem = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const deleteTodo = (id: number) => { 
    dispatch(removeTodo(id));
  }

  return (
    <ol className="list-decimal  list-inside py-2">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li
            key={todo.id}
            className="list-item flex-row justify-center items-center gap-2 "
          >
            {todo.title} <input type="checkbox" />
            <Button
              nameForButton="Delete"
              handlerFunction={() => deleteTodo(todo.id)}
            />
          </li>
        ))
      ) : (
        <li className="text-gray-400 list-none">Not todo yet</li>
      )}
    </ol>
  );
};

export default TodoListItem;
