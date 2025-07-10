
import Typography from "../../components/parandComponents/Typography";
import Banner from "../../components/parandComponents/Banner";
import NumberOrder from "../../components/parandComponents/NumberOrder";
import Textarea from "../../components/parandComponents/Textarea";
import SingleProductLayout from "../../components/layouts/SingleProductLayout";

export default function ProductPage() {
  // const handelBackStep = () => {
  //   console.log("HomePage");
  // };
  return (
    <SingleProductLayout>
      <Banner className="h-[40%]" />
      
      <Typography />
      <NumberOrder />
      <Textarea />
    </SingleProductLayout>
  );
}
