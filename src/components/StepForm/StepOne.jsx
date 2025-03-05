import React from "react";
import { Form } from "react-bootstrap";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import mail from "../../assets/images/mail.svg";
import password from "../../assets/images/password.svg";
import user from "../../assets/images/user.svg";
import phone from "../../assets/images/phone.svg";

const StepOne = ({ nextStep, prevStep }) => {
    return (
        <div className='mw-520 mx-auto'>
            <Form>
                <Input inputWrapperClass="mb-20" name="firstName" iconLeft={<img className="img-fluid" src={user} alt="User Icon" />} type="text" inputFieldClass="input-field" placeholder="Enter first name" />
                <Input inputWrapperClass="mb-20" name="lastName" iconLeft={<img className="img-fluid" src={user} alt="User Icon" />} type="text" inputFieldClass="input-field" placeholder="Enter last name" />
                <Input inputWrapperClass="mb-20" name="email" iconLeft={<img className="img-fluid" src={mail} alt="Mail Icon" />} type="email" inputFieldClass="input-field" placeholder="Enter your email" />
                <Input inputWrapperClass="mb-20" name="phone" iconLeft={<img className="img-fluid" src={phone} alt="Phone Icon" />} type="tel" inputFieldClass="input-field" placeholder="Enter Phone No." />
                <Input inputWrapperClass="mb-20" name="password" iconLeft={<img className="img-fluid" src={password} alt="Password Icon" />} type="password" inputFieldClass="input-field" placeholder="Enter your password" />
                <Input inputWrapperClass="mb-20" name="confirmPassword" iconLeft={<img className="img-fluid" src={password} alt="Password Icon" />} type="password" inputFieldClass="input-field" placeholder="Confirm password" />

                <Select selectWrapperClass="mb-20"  selectContainerClass="selectContainerClass"  selectFieldClass="input-field ps-12" options={[{ value: "Country / region ", label: "Country / region" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }]} className="custom-select" />

                <div className="d-flex gap-3 buttonWrapper">
                    <Button variant="light" className="w-100" onClick={prevStep}>Back</Button>
                    <Button variant="dark" className="w-100" onClick={nextStep}>Next</Button>
                </div>
            </Form>
        </div>
    );
};

export default StepOne;
