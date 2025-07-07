import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

type SideBarItemsType = {
  label?: string;
  icon?: ReactNode;
  path?: string;
  onClick?: () => void;
};

type SideBarprops = {
  menuItems: SideBarItemsType[];
};
export default function SideBar(props: SideBarprops) {
  const { menuItems } = props;
  const [isActive, setIsActive]= useState<string | undefined>("")
  return (
    <div className={`w-22  `}>
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          className={` flex gap-3 items-center pl-6  pb-4 ${isActive === item.label? "border-l-4 border-[#454B60]":""  }`}
          to={`${item.path}`}
          onClick={()=>setIsActive(item.label)}
        >
          <span className="text-[#454B60] ">{item.icon}</span>

         { item.label && <span className={` font-medium text-[#454B60]`}> {item.label}</span>}
        </NavLink>
      ))}
    </div>
  );
}
