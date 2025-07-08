import type { ReactNode } from "react";

import { IoDocumentsOutline } from "react-icons/io5";

type CardType = {
  children?: React.ReactNode;
  title: string;
  className?: string;
  number: number;
  icon: ReactNode;
  status:boolean;
  date: string
};

export default function Card(props: CardType) {
  const { children, title, className, number, icon ,status,date} = props;
  return (
    <div className={`flex justify-evenly gap-3 w-[80%] p-3 border-b-1 border-gray-700 ${className} `}>
      <span>{number}</span>
      <span>{icon && "send"}</span>
      <span>{date}</span>
      <span> {title}</span>
      <span>{status ? "true" :"false"}</span>
      <span>{status ? <IoDocumentsOutline /> : <IoDocumentsOutline  />}</span>

      {children}
    </div>
  );
}
