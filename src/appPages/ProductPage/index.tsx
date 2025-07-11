import SingleProductLayout from "../../components/layouts/SingleProductLayout";

import NumberOfOrder from "../../components/parandComponents/NumberOfOrder";
import Textarea from "../../components/parandComponents/Textarea";
import Typography from "../../components/parandComponents/Typography";

export default function ProductPage() {
  //   const handelBackStep = () => {
  //     console.log("HomePage");
  //   };
  return (
    <SingleProductLayout>
      <Typography className="p-2 flex flex-col gap-3"  />
      <NumberOfOrder className="flex justify-center gap-3 bg-white"/>
      <Textarea className="bg-[#E3E5E8]   rounded-2xl" />
    </SingleProductLayout>
  );
}
