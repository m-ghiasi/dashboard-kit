type Textarea = {
  className:string;

}

export default function Textarea(props:Textarea) {
  const {className}=props
  return (
  
        <div className={`${className}`}>
          <textarea name="" id=""></textarea>
        </div>
     
  );
}
