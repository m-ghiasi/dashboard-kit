import {  type ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { IoIosLogIn } from "react-icons/io";
import Button from "../../../basic/Button";

type SideBarItemsType = {
  label?: string;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
};

type SideBarprops = {
  menuItems: SideBarItemsType[];
};
const handelLogout= ()=>{
  console.log("logout")
}
export default function SideBar(props: SideBarprops) {
  const { menuItems } = props;
  
  return (
    <div className={`w-40 h-screen pt-20 p-5 flex flex-col justify-between  border-r-1 border-[#454B60]`}>
    <div>
        {menuItems.map((item, index) => (
        <NavLink
          key={index}
          className={` flex gap-3 items-center pb-4 `}
          to={`${item.to}`}

          
        >
          <span className="text-[#454B60] min-w-[19px] min-h-[19px] ">{item.icon}</span>

         { item.label && <span className={`  text-[#454B60] text-[14px]`}> {item.label}</span>}
        </NavLink>
      ))}
    </div>

      <Button className="flex items-center gap-3" onclick={handelLogout} label=" Logout">
        <IoIosLogIn className="text-[#454B60]" />
      </Button>
    </div>
  );
}
