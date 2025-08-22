import Button from "../Button/Button";

const TodoInput = () => {
  return (
    <div className="flex justify-center items-center">
      <label>
        <input
          type="text"
          placeholder="Enter your todo here ..."
          className="outline-none border-1 rounded-2xl px-2 border-[var(--border-color-input)] sm:w-sm md:w-md"
        />
      </label>
      <Button nameForButton="Add Todo" />
    </div>
  );
};

export default TodoInput;
