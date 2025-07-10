type TabType = {
  handelModal: () => void;
};


import IconButtonGroup from "../IconButtonGroup";
import { IoIosSettings } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { FcOk } from "react-icons/fc";
import Button from "../../../basic/Button";

export default function Tab(props: TabType) {
  const { handelModal } = props;
  const buttons = [
    {
      icon: <IoIosSettings />,
      ariaLabel: "تنظیمات",
      onClick: () => console.log("تنظیمات"),
    },
    { icon: <FaPlusCircle />, ariaLabel: "بارگذاری مجدد" },
    { icon: <FaCircleMinus />, ariaLabel: "حذف" },
  ];

  return (
    <div className="w-[80%]  mb-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Button
          className="bg-blue-400 p-2 rounded-2xl"
          label="افزودن محصول"
          onclick={handelModal}
        >
          <FcOk size={18} />
        </Button>

        <IconButtonGroup buttons={buttons} />
      </div>
      <h2 className="font-bold">محصولات </h2>
    </div>
  );
}
