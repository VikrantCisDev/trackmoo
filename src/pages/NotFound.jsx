import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from '../components/ui/Button';
import Search from '../components/ui/Search';

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

  return (
    <div className="main-content dash-SB">
        csdf
        <div className="dash-container">
          <div className="top-bar">
            <h1>Livestock Marketplace</h1>
            <div className="top-bar-right">
              <Search/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default StepOne;
