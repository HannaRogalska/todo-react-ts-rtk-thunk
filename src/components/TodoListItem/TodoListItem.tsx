import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/storeHooks/storeHooks";
import Button from "../Button/Button";
import {
  fetchData,
  removeTodo,
  checkedTodo,
} from "../../features/todo/todoSlice";

const TodoListItem = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ol className="list-decimal pl-6">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id} className="mb-2 last:mb-0">
            <div className="flex justify-between items-center">
              {todo.title}
              <div className="flex justify-between items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(checkedTodo(todo.id))}
                  className="mx-2"
                />
                <Button
                  nameForButton="Delete"
                  handlerFunction={() => dispatch(removeTodo(todo.id))}
                />
              </div>
            </div>
          </li>
        ))
      ) : (
        <li className="text-gray-400 list-none">Not todo yet</li>
      )}
    </ol>
  );
};

export default TodoListItem;
