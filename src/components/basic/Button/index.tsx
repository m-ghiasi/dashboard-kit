import type { ReactNode } from "react";

type ButtonType = {
  label?: string;
  className?: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
};
export default function Button(props: ButtonType) {
  const { label, className, onclick, children ,disabled} = props;
  return (
    <button
      onClick={onclick}
      className={`flex gap-1  items-center cursor-pointer ${className} text-[14px]`}
      disabled={disabled}
    >
      {children}
      {label}
    </button>
  );
}
