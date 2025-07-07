import type { ReactNode } from "react";

type IconButtonType = {
  onClick?: () => void;
  icon: ReactNode;
  className?: string;
  ariaLabel: string;
};
export default function IconButton(props: IconButtonType) {
  const { onClick, icon, ariaLabel, className } = props;
  return (
    <button onClick={onClick} aria-label={ariaLabel} className={` border-1 border-gray-500 text-gray-500 p-1 ${className}`}>
      {icon}
    </button>
  );
}
