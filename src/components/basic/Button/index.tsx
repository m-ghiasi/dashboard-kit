import type { ReactNode } from "react";

type ButtonType = {
  label?: string;
  className?: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
};
export default function Button(props: ButtonType) {
  const { label, className, onclick, children } = props;
  return (
    <button onClick={onclick} className={`flex gap-1 px-3 items-center cursor-pointer ${className} text-[14px]`}>
      {children}
      {label}
      
    </button>
  );
}
