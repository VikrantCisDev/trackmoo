import React, { useState } from 'react';
import StepOne from '../../components/StepForm/StepOne';
import StepTwo from '../../components/StepForm/StepTwo';
import StepThree from '../../components/StepForm/StepThree';
import StepFour from '../../components/StepForm/StepFour';
import Stepper from '../../components/StepForm/Stepper';
import { Container } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [finalSteps, setFinalSteps] = useState(false);
    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
    const finalStep = () => setFinalSteps(true);

    return (
        <Container className='custom-container'>
            {finalSteps ? (<>
                <StepFour />
            </>) : 
            <div className="step-form">
                <Stepper step={step} />
                {step === 1 && <StepOne nextStep={nextStep} prevStep={prevStep} />}
                {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <StepThree nextStep={finalStep} prevStep={prevStep} />}
                {/* {step === 4 && <StepFour prevStep={prevStep} />} */}
          
            </div>
            }
        </Container>
    );
};

export default Signup;
