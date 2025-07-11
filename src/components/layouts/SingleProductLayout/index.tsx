type LayoutType = {
  children: ReactNode;
};
import type { ReactNode } from "react";
import Button from "../../basic/Button";
import { IoIosArrowForward } from "react-icons/io";
import Banner from "../../parandComponents/Banner";
import { useNavigate } from "react-router-dom";

export default function SingleProductLayout(props: LayoutType) {
  const { children } = props;
  const navigate= useNavigate()

  // از بیرون باید بهش پاس داده بشه ؟؟
  const handelBackPage = () => {
    navigate("/resturan");
  };
  return (
    <div className="h-screen relative  ">
      <Banner className="w-full   bg-[#BBBFC3] " />
      <Button
        className="rounded-full fixed top-5 right-5 w-12 h-12 flex justify-center items-center z-10 bg-[#BBBFC3]"
        onclick={handelBackPage}
      >
        <IoIosArrowForward color={"#fff"} size={30} />
      </Button>

      <div className="flex-1 overflow-y-auto px-6 pt-16 pb-28 flex flex-col gap-[15px] ">{children}</div>

      <div className="border-t-2 border-[#E3E5E8] bg-white flex justify-center items-center fixed bottom-0 py-7 max-h-[150px] w-full">
        <Button
        className="bg-[#72777b] w-[225px] h-[75px]  rounded-2xl  "
          onclick={handelBackPage}
        ></Button>
      </div>
    </div>
  );
}
