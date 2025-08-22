interface ButtonProps{
    nameForButton: string;
}
const Button = ( name: ButtonProps) => {
  return (
    <button className="border rounded-2xl px-2 mx-2 bg-[var(--bg-color-button)] text-[var(--text-color-dark-theme)]">
      {name.nameForButton}
    </button>
  );
};

export default Button
