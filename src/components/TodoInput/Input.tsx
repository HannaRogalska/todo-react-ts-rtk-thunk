import { useState } from "react";
import Button from "../Button/Button";
import type { ChangeEvent} from "react";
import { useAppDispatch } from "../../hooks/storeHooks/storeHooks";
import { addTodo } from "../../features/todo/todoSlice";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const addTodoHandler = () => {
    if (inputValue.trim() === "") return;
    dispatch(addTodo(inputValue));
    setInputValue("")
  }

  return (
    <div className="flex justify-center items-center">
      <label>
        <input
          type="text"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          placeholder="Enter your todo here ..."
          className="outline-none border-1 rounded-2xl px-2 border-[var(--border-color-input)] sm:w-sm md:w-md"
        />
      </label>
      <Button nameForButton="Add Todo" handlerFunction={addTodoHandler} />
    </div>
  );
};

export default TodoInput;
