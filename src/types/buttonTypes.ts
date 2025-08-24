export interface ButtonProps {
  nameForButton: string;
  handlerFunction?: (
    data?: number,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => void;
}
