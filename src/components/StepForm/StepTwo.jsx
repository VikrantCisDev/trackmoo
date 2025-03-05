import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Input from "../ui/Input";
import Button from "../ui/Button";

const StepTwo = ({ nextStep, prevStep }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    // Handle OTP Input
    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return; // Only allow numbers

        let newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input field if a digit is entered
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    // Handle OTP verification
    const verifyOtp = (event) => {
        event.preventDefault();
        const enteredOtp = otp.join("");

        if (enteredOtp.length !== 6) {
            alert("Please enter a valid 6-digit OTP.");
            return;
        }

        console.log("Entered OTP:", enteredOtp);
        nextStep(); // Proceed if valid
    };

    return (
        <div className='mw-520 mx-auto'>
            <div className='mb-4 mw-470 mx-auto text-center'>
                <h3 className='fw-bold mb-3'>OTP Verification</h3>
                <p> Enter verification code sent to your registered email address below.</p>
            </div>
            <Form onSubmit={verifyOtp}>
                <div className="otpInputWrapper d-flex justify-content-between gap-2">
                    {otp.map((digit, index) => (
                        <Input
                            inputFieldClass="input-field text-center p-3"
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength="1"
                            className="otp-field text-center"
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <p className="mt-3 text-start">Please enter OTP with-in: <span className="fw-semi-bold">00:30</span></p>

                <div className="d-flex gap-3 buttonWrapper">
                    <Button variant="light" className="w-100" onClick={prevStep}>Back</Button>
                    <Button variant="dark" className="w-100" type="submit">Verify & Continue</Button>
                </div>
            </Form>
        </div >
    );
};

export default StepTwo;
