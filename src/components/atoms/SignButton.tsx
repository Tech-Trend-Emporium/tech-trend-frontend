import { Button as FlowButton } from "flowbite-react";

interface ButtonProps {
  type?: "button" | "submit";
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button = ({ type = "button", label, disabled, isLoading }: ButtonProps) => (
  <FlowButton
    type={type}
    disabled={disabled}
    color="dark"
    className="w-full font-semibold"
  >
    {isLoading ? "Procesando..." : label}
  </FlowButton>
);
