const TodoInput = () => {
  return (
    <label>
      <input
        type="text"
        placeholder="Enter your todo here ..."
        className="outline-none border-1 rounded-2xl px-2 border-[var(--border-color-input)] w-lg sm:w-sm md:w-md"
      />
    </label>
  );
};

export default TodoInput;
