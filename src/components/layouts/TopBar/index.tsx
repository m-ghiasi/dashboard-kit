import {  useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";


type topBarItemsType = {
  label: string;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
};

type SideBarprops = {
  topBarItems: topBarItemsType[];
};

export default function TopBar(props: SideBarprops) {
  const { topBarItems } = props;
  const [isActive , setIsActive]= useState<string>("AddProducts")
  
  return (
    <div className="w-[100%]">
    <div className="w-[100%] flex  border-b-1 border-[#454B60] items-center justify-center  gap-15 pt-4">
        {topBarItems.map((item, index) => (
        <NavLink
          key={index}
          className={`${isActive===item.label ? "border-b-2 border-[#454B60]":""} flex gap-3 items-center pb-4 `}
          to={`${item.to}`}
          onClick={()=>setIsActive(item.label)}
          
        >
          <span className="text-[#454B60] min-w-[19px] min-h-[19px] ">{item.icon}</span>

         { item.label && <span className={`  text-[#454B60] text-[14px]`}> {item.label}</span>}
        </NavLink>
      ))}
    </div>

      
    </div>
  );
}
