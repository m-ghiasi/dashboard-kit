import { useState } from "react";
import Card from "../../components/basic/Card";
import Tab from "../../components/layouts/Tabs";
import {orders} from "../../data/products"
import Modal from "../../components/basic/Modal";
import Button from "../../components/basic/Button";

export default function AddProducts(){
     const [show, setShow] = useState(false);
    const handelModal = () => {
    setShow(true);
  };
  const handelClose = () => {
    setShow(false);
  };
    return(
      <div className="m-3 overflow-hidden">
        <Tab handelModal={handelModal}/>
         {show ? (
        <Modal divClassName="w-[400px] " WrapperClassName="w-[400px]">
          <Button label={"close"} onclick={handelClose} />
          <p>isLoading....</p>
        </Modal>
      ) : null}
          <div className="flex flex-col  gap-3 ">
            
           {orders.map((item, index)=>(
            <Card 
            key={item.id}
            icon={item.icon}
            number={index}
            status={item.status}
            title={item.title}

             />
           ))}
        </div>
      </div>
    )
}