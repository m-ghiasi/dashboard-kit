import Number from "../Number";
import Span from "../Span";


type TitleType = {

  className: string;
  
};
export default function ItemPrice(props: TitleType) {
  const { className}= props;
  return (
   <div className={`${className}`}>
    <Number className="text-[#E3E5E8]" number={0}/>
    <Span className=""title="" />
   </div>
  );
}
