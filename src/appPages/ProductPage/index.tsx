import Button from "../../components/basic/Button"
import Typography from "../../components/parandComponents/Typography"
import Banner from "../../components/parandComponents/Banner"
import NumberOrder from "../../components/parandComponents/NumberOrder"
import Textarea from "../../components/parandComponents/Textarea"


export default function ProductPage(){
    const handelBackStep= ()=>{
        console.log("HomePage")
    }
    return(
        <div className="h-screen relative ">
      <Banner className="h-[40%]" />
      <Button onclick={handelBackStep} label=" " className="rounded-full absolute top-5 right-10 bg-white w-10 h-10   z-10" />
      <Typography/>
      <NumberOrder />
      <Textarea />
    </div>
    )
}