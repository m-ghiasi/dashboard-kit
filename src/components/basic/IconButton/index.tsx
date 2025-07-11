import type { ReactNode } from "react";

type IconButtonType = {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
};
export default function IconButton(props: IconButtonType) {
  const { onClick, children, ariaLabel, className } = props;
  return (
    <button onClick={onClick} aria-label={ariaLabel} className={`  ${className}`}>
      {children}
    </button>
  );
}
