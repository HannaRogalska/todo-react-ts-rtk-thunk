import type { ButtonProps } from "../../types/buttonTypes";
const Button = ({ nameForButton }: ButtonProps) => {
  return (
    <button className="border rounded-2xl px-2 mx-2 bg-[var(--bg-color-button)] text-[var(--text-color-dark-theme)]">
      {nameForButton}
    </button>
  );
};

export default Button
