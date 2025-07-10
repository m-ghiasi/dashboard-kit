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
    <div className="h-screen relative ">
      <Button
        className="rounded-full absolute top-5 right-10 w-10 h-10   z-10"
        onclick={handelBackPage}
      >
        <FaArrowRight />
      </Button>

      {children}
      <Button onclick={handelBackPage}></Button>
    </div>
  );
}
