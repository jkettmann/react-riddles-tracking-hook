import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
};

export function Button({ icon, children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {icon}
      {children}
    </button>
  );
}
