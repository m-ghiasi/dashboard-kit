type NumberOrderType={
  className:string
}
import { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import IconButton from "../../basic/IconButton";
import Number from "../../basic/Number";

export default function NumberOrder(props:NumberOrderType) {
  const {className}=props
  const [number, setNumber]= useState(0)
  const handehIncris=()=>{
    setNumber(number + 1)
  }
  const handehDicres=()=>{
    setNumber(number-1)
  }

  return (
    <div className={`${className}`}>
      <IconButton onClick={handehDicres} className=" text-gray-500  flex items-center justify-center rounded-2xl bg-gray-300 w-20 h-20">
        <FaMinus />
      </IconButton>
      <Number  number={number} className="flex items-center justify-center rounded-2xl font-bold text-2xl w-20 h-20"/>

      

      <IconButton onClick={handehIncris} className=" text-gray-500  flex items-center justify-center rounded-2xl bg-gray-300 w-20 h-20">
        <FaPlus />
      </IconButton>
    </div>
  );
}
