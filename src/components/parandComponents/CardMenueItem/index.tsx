import { IoIosCloseCircleOutline } from "react-icons/io";
import Badge from "../../basic/Badge";
import Img from "../Img";
import Title from "../../basic/Titel";
import ItemPrice from "../../basic/ItemPrice";

type CardItemType = {
  className: string;
};

export default function CardMenueItem(props: CardItemType) {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <Img className="rounded-2xl w-25 h-25 bg-[#E3E5E8]" image={"dfdfd"} />
      <div className="flex flex-col gap-3">
        <Badge
          title="jotdt"
          className=" rounded-2xl flex items-center gap-3 "
          icon={<IoIosCloseCircleOutline />}
        />
        <Title className="bg-[#72777B] w-45 h-4 rounded-2xl" title="" />
        <ItemPrice className="bg-[#E3E5E8] rounded-2xl" />
      </div>
    </div>
  );
}
