import { useState } from "react";
import Button from "../Button/Button";
import type { ChangeEvent} from "react";


const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  
  return (
    <div className="flex justify-center items-center">
      <label>
        <input
          type="text"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          placeholder="Enter your todo here ..."
          className="outline-none border-1 rounded-2xl px-2 border-[var(--border-color-input)] sm:w-sm md:w-md"
        />
      </label>
      <Button nameForButton="Add Todo" />
    </div>
  );
};

export default TodoInput;
