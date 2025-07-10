
import type { ReactNode } from "react";
import IconButton from "../../basic/IconButton";


type IconButtonGroupType = {
 className ?:string;
 buttons: { icon: ReactNode; onClick?: () => void; ariaLabel: string }[]
};



export default function IconButtonGroup(props:IconButtonGroupType) {
  const {buttons,className}= props
  return (
    <div className={`${className}`}>
      {buttons.map((btn, index)=>(
        <IconButton 
        key={index}
        icon={btn.icon}
        onClick={btn.onClick}
        ariaLabel={btn.ariaLabel}
        /> 

      ))}
      
     
    </div>
  );
}
