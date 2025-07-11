type LayoutType = {
  children: ReactNode;
};
import { useState, type ReactNode } from "react";
import Button from "../../basic/Button";
import { IoIosArrowForward } from "react-icons/io";
import Banner from "../../parandComponents/Banner";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

export default function ResturanPageLayout(props: LayoutType) {
  const { children } = props;
  const [isFavorit, setIsFavorit] = useState(false);
  const navigate = useNavigate();
  const handelBackPage = () => {
    navigate("/HomePage");
  };
  const handelFavorit = () => {
    setIsFavorit((prev) => !prev);
  };
  return (
    <div className="h-screen relative  ">
      <Banner className="w-full   bg-[#BBBFC3] " />
      <div className="w-full  fixed top-5 flex justify-between items-center ">
        <Button
          className="text-white rounded-full  top-5 right-5 w-12 h-12 flex justify-center items-center  "
          onclick={handelFavorit}
        >
          <FaRegHeart color={isFavorit ? "red" : ""} size={30} />
        </Button>

        <Button
          className="rounded-full fixed top-5 right-5 w-12 h-12 flex justify-center items-center z-10"
          onclick={handelBackPage}
        >
          <IoIosArrowForward color={"#fff"} size={30} />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-16 pb-28 flex flex-col gap-[15px] ">
        {children}
      </div>
    </div>
  );
}
