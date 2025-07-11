type LayoutType = {
  children: ReactNode;
};
import type { ReactNode } from "react";
import Button from "../../basic/Button";
import { FaArrowRight } from "react-icons/fa";

export default function SingleProductLayout(props: LayoutType) {
  const { children } = props;
  const handelBackPage = () => {
    console.log("Privious Page");
  };
  return (
    <div className="h-screen relative  ">
      <Button
        className="rounded-full absolute top-5 right-10 w-10 h-10 bg-red-500  z-10"
        onclick={handelBackPage}
      >
        <FaArrowRight />
      </Button>

      <div className="flex-1 overflow-y-auto px-4 pt-16 pb-28 ">{children}</div>

      <div className="border-t-2 border-[#E3E5E8] flex justify-center items-center absolute bottom-0 h-[150px] w-full">
        <Button
          className="bg-[#72777b] w-[225px] h-[75px]  rounded-2xl  "
          onclick={handelBackPage}
        ></Button>
      </div>
    </div>
  );
}
