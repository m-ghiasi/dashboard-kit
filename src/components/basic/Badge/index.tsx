import type { ReactNode } from "react";
import IconButton from "../IconButton";
import Span from "../Span";


type BadgeType = {
  title : string;
  className: string;
  icon:ReactNode
  
};
export default function Badge(props: BadgeType) {
  const { title,className,}= props;
  return (
   <div className={`${className}`}>
    <IconButton className="rounded-full w-10 h-10 bg-[#BBBFC3]"/>
    <Span title="" className="w-15 h-3 rounded-2xl bg-[#E3E5E8]"/>
    
    </div>
  );
}
