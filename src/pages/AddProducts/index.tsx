import { useState } from "react";
import Card from "../../components/basic/Card";
import Tab from "../../components/layouts/Tabs";
import { orders } from "../../data/products";
import Modal from "../../components/basic/Modal";
import Button from "../../components/basic/Button";
import Pagination from "../../components/layouts/pageination";

export default function AddProducts() {
  const [show, setShow] = useState(false);

  // pagination data

  const [currentPage, setCurrentPage]= useState(1);
  const itemPerPage = 7;
  const startIndex= (currentPage - 1)* itemPerPage;
  const endIndex = startIndex + itemPerPage;
  
  const currentItems = orders.slice(startIndex, endIndex)
  const totalPages = Math.ceil(orders.length / itemPerPage)
    const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  const handelModal = () => {
    setShow(true);
  };
  const handelClose = () => {
    setShow(false);
  };
  return (
    <div className="m-3 overflow-hidden">
      <Tab handelModal={handelModal} />
      {show ? (
        <Modal divClassName="w-[400px] " WrapperClassName="w-[400px]">
          <Button label={"close"} onclick={handelClose} />
          <p>isLoading....</p>
        </Modal>
      ) : null}
      <div className="flex flex-col  gap-1 ">
        {currentItems.map((item, index) => (
          <Card
            key={item.id}
            icon={item.icon}
            number={index}
            status={item.status}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>

      <Pagination 
      currentPage={currentPage}
      onNext={goToNext}
      onPrev={goToPrev}
      totalPages={totalPages}/>
    </div>
  );
}
