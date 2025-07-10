import { useState } from "react"
import Card from "../../basic/Card";
import { FaHome } from "react-icons/fa";
import Button from "../../basic/Button";

export default function Breadcromb(){
    
     const [currentStep, setCurrentStep ]= useState(1);
     const steps =[ 1,2,3];


     const nextStep = ()=>{
        if(currentStep < steps.length) {
            setCurrentStep(currentStep +1)
        }
     }
     const prevStep = ()=>{
        if(currentStep < steps.length) {
            setCurrentStep(currentStep -1)
        }
     }
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                {steps.map((step, index)=>(
                    <div className="flex flex-col items-center justify-center" key={step}>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep>= step ? "bg-blue-500":"bg-gray-500" }`}>
                            {step}
                        </div>
                        {index < steps.length -1 && ( <div className={`h-1 w-20 ${currentStep > step ? "bg-blue-500": " gh-gray-500"}`}></div> ) }
                    </div>
                ))}
            </div>
            
            <div>
                {currentStep === 1 && <Card icon={<FaHome/>} date="111" number={111} status={true}  title="stage1 " />}  
                {currentStep === 2 && <Card icon={<FaHome/>} date="222" number={222} status={true}  title="stage2 " />}  
                {currentStep === 3 && <Card icon={<FaHome/>} date="333" number={333} status={true}  title="stage3 " />}  
                 
            </div>
            <Button onclick={nextStep}>next stage</Button>
            <Button onclick={prevStep}>prev stage</Button>

        </div>
       
    )
}