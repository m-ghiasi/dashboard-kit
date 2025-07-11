
import SingleProductLayout from "../../components/layouts/SingleProductLayout";


import NumberOfOrder from "../../components/parandComponents/NumberOfOrder";
import Textarea from "../../components/parandComponents/Textarea";
import Typography from "../../components/parandComponents/Typography";

export default function ProductPage() {
//   const handelBackStep = () => {
//     console.log("HomePage");
//   };
  return (
    <SingleProductLayout >
      
     
       <Typography />
       <NumberOfOrder />
      <Textarea /> 
    </SingleProductLayout>
  );
}
