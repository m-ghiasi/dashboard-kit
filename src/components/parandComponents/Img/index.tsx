
type prop = {
  className: string;
  image:string 
  
};
export default function Img({ className,image}: prop) {
  return (
    <img  className={className} src={image} alt="" />
   
  );
}
