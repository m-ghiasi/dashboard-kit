import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import TopBar from "../TopBar";
import type { ReactNode } from "react";

import { IoMdHome } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { TbCalendarEventFilled } from "react-icons/tb";
import { MdAnalytics } from "react-icons/md";
import { HiInboxArrowDown } from "react-icons/hi2";

import { IoImageOutline } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";

type menuItemsType = {
  label: string;
  to: string;
  icon: ReactNode;
};
const menueItems: menuItemsType[] = [
  {
    label: "Home",
    to: "/Home",
    icon: <IoMdHome />,
  },
  {
    label: "My Profile",
    to: "/profile",
    icon: <IoPersonOutline />,
  },

  {
    label: "Reports",
    to: "/Reports",
    icon: <HiOutlineDocumentDuplicate />,
  },
  {
    label: "Analytics",
    to: "/Analytics",
    icon: <MdAnalytics />,
  },
  {
    label: "Calender",
    to: "/Calender",
    icon: <TbCalendarEventFilled />,
  },
  {
    label: "Inbox",
    to: "/Inbox",
    icon: <HiInboxArrowDown />,
  },
  {
    label: "Gallery",
    to: "/Gallery",
    icon: <IoImageOutline />,
  },
];

const topBarItems:menuItemsType[] = [
  {
    label: "AddProducts",
    to: "/AddProducts",
    icon: <RiMenuAddFill />,
  },
  {
    label: "Gallery",
    to: "/AddProducts",
    icon: <IoImageOutline />,
  },
  {
    label: "Database",
    to: "/Gallery",
    icon: <IoImageOutline />,
  },
    {
    label: "Setting",
    to: "/Gallery",
    icon: <IoImageOutline />,
  },
]
export default function MainLayout() {
  return (
    <div className="flex overflow-hidden">
      <SideBar menuItems={menueItems} />
      
      <div className="flex-1">
        <TopBar topBarItems={topBarItems}/>
        <Outlet />
      </div>
    </div>
  );
}
