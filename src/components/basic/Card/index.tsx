import type { ReactNode } from "react";
import { FcOk } from "react-icons/fc";
import { MdDoNotDisturbOn } from "react-icons/md";

type CardType = {
  children?: React.ReactNode;
  title: string;
  className?: string;
  number: number;
  icon: ReactNode;
  status:boolean
};

export default function Card(props: CardType) {
  const { children, title, className, number, icon ,status} = props;
  return (
    <div className={`flex justify-evenly gap-3 w-[80%] p-3 border-1 border-gray-700 rounded-2xl ${className} `}>
      <span>{number}</span>
      <span>{icon}</span>
      <span> {title}</span>
      <span>{status ? <FcOk /> : <MdDoNotDisturbOn color="red" />}</span>

      {children}
    </div>
  );
}
