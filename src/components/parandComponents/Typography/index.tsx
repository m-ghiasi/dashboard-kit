import Paragraph from "../../basic/Paragraph";
import Title from "../../basic/Titel";

export default function Typography() {
  return (
    <div className="p-2 flex flex-col gap-3">
      <Title className="bg-[#72777B] w-40 h-4 rounded-2xl" title="" />
      <hr className="text-[#E3E5E8]" />
      <Paragraph content="" className="bg-[#E3E5E8]  w-70 h-4 rounded-2xl " />
      <Paragraph content="" className="bg-[#E3E5E8]   w-70 h-4 rounded-2xl" />
    </div>
  );
}
