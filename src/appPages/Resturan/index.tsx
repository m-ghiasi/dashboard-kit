
import Title from "../../components/basic/Titel";
import ResturanPageLayout from "../../components/layouts/ResturanPageLayout";
import CardMenueItem from "../../components/parandComponents/CardMenueItem";

export default function Resturan() {
  return (
    <ResturanPageLayout>
      <Title className="bg-[#72777B] w-40 h-4 rounded-2xl" title="" />
      <CardMenueItem className="flex gap-4 py-4 border-b-2 border-[#E3E5E8]"/>
      <CardMenueItem className="flex gap-4 py-4 border-b-2 border-[#E3E5E8]"/>
      <CardMenueItem className="flex gap-4 py-4 border-b-2 border-[#E3E5E8]"/>
    </ResturanPageLayout>
  );
}
 