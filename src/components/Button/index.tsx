import { LoadMoreButton } from './styles';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export const Button = ({ text, onClick, disabled }: ButtonProps) => (
  <LoadMoreButton type="button" onClick={onClick} disabled={disabled}>
    {text}
  </LoadMoreButton>
);
