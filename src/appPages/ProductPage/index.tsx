import Button from "../../basic/Button";
import Typography from "../../parand/Typography";
import Banner from "../../parand/Banner";
import NumberOrder from "../../parand/NumberOrder";
import Textarea from "../../parand/Textarea";

export default function ProductPage(){
    const handelBackStep= ()=>{
        console.log("HomePage")
    }
    return(
        <div className="h-screen relative ">
      <Banner className="h-[40%]" />
      <Button onclick={handelBackStep} label=" " className="rounded-full absolute top-5 right-10 bg-white w-10 h-10   z-10" />
      <Typography  />
      <NumberOrder />
      <Textarea />
    </div>
    )
}