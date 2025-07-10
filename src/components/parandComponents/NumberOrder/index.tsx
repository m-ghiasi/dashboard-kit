"use client";

import { useState } from "react";
import Button from "../Button";

export default function NumberOrder() {
  const [number, setNumber]= useState(0)
  const handehIncris=()=>{
    setNumber(number + 1)
  }
  const handehDicres=()=>{
    setNumber(number-1)
  }
  
  return (
    <div className="flex justify-center gap-2 bg-white ">
      <Button onClick={handehIncris} className="rounded-2xl bg-gray-200 w-20 h-20"></Button>
      <span className=" flex items-center justify-center rounded-2xl bg-gray-300 w-20 h-20">{number}</span>
      <Button onClick={handehDicres} className="rounded-2xl bg-gray-200 w-20 h-20"><span className="w-1 h-1 bg-white"> </span></Button>
    </div>
  );
}
