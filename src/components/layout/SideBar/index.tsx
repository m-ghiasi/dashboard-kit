import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type SideBarItemsType = {
  label: string;
  icon?: ReactNode;
  path?: string;
  onClick?: () => void;
};

type SideBarprops = {
  menuItems: SideBarItemsType[];
};
export default function SideBar(props: SideBarprops) {
  const { menuItems } = props;
  return (
    <div>
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          className={` flex gap-3 items-center pl-6  pb-4`}
          to={`${item.path}`}
        >
          <span className="text-gray-700 ">{item.icon}</span>

          <span className={` font-medium text-gray-700`}> {item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
