import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from '../components/ui/Button';
import Search from '../components/ui/Search';
import { IoMdAdd } from "react-icons/io";
import CustomDropdown from '../components/ui/Dropdown';
import { IoFilterOutline } from "react-icons/io5";

const StepOne = () => {
  const [subStep, setSubStep] = useState(1);

  // Handle next step
  const handleNext = () => {
    if (subStep === 1) {
      setSubStep(2);
    } else {
      console.log("OTP verified and continuing to the next step");
    }
  };

  const filter = ["action","action2","action3"]

  return (
    <div className="main-content dash-SB">
        <div className="dash-container">
          <div className="top-bar">
            <h1>Livestock Marketplace</h1>
            <div className="top-bar-right">
              <Search/>
              <CustomDropdown options={filter} className="filter">
                <IoFilterOutline className='me-2' size={23} color='#A6A6A6' />Filter
              </CustomDropdown>
              <Button className="fw-normal dash-sellBtn w-100">
                <IoMdAdd size={22}/> List/ Sell Livestock
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default StepOne;
