import React from "react";
import UserProfileSec from "../../components/UserProfile/UserProfileSec";
import profileImg from "../../assets/images/profileImg.png";
import "./UserProfile.css";
import Input from "../../components/ui/Input";
import { Image } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../../components/ui/Button";
import { FiEdit } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";

const UserProfile = () => {
  return (
    <div>
      <div className="dash-container">
        <div className="top-bar">
          <h2>User Profile</h2>
          <Button className="delete-btn fw-normal">
            <RiDeleteBin6Line className="me-1" />
            Delete
          </Button>
        </div>

        <div className="detailSec">
          <div className="d-flex">
            <Image src={profileImg} alt={"alt"} fluid />
            <div className="d-flex align-items-center btn-wrapper ms-4">
              <Button className="upload-btn fw-normal">
                <FiUpload className="me-1" />
                Upload
              </Button>
            </div>
          </div>
        </div>
        <div className="detailSec">
          <div className="sec-top mb-4">
            <h4 className="fw-semi-bold">Personal Information</h4>
            <Button className="fw-normal" variant="light">
              <FiEdit className="me-1" />
              Edit
            </Button>
          </div>
          <div className="detail-form">
            <div className="row">
              <div className="col-lg-6 mb-lg-4 mb-3 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="text"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="John Parker"
                  label="Name"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
              <div className="col-lg-6 mb-lg-4 mb-3 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="email"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="Johnparker@xyx.com"
                  label="Email"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
              <div className="col-lg-6 mb-lg-4 mb-3 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="number"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="(316) 555-0116"
                  label="Phone"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
              <div className="col-lg-6 mb-lg-4 mb-3 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="date"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="10/12/1999"
                  label="Date of Birth"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
              <div className="col-lg-6 mb-lg-4 mb-3 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="text"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="Male"
                  label="Gender"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
              <div className="col-lg-6 mb-lg-4 mb-3 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="text"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="ID Number"
                  label="12345678654"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
              <div className="col-lg-12 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="text"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                  label="Address"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="detailSec">
          <div className="sec-top mb-4">
            <h4 className="fw-semi-bold">Personal Information</h4>
            <Button className="fw-normal" variant="light">
              <FiEdit className="me-1" />
              Edit
            </Button>
          </div>
          <div className="detail-form">
            <div className="row">
              <div className="col-lg-6 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="password"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="***************"
                  label="Password"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
              <div className="col-lg-6 position-relative">
                <Input
                  inputWrapperClass="formInpWrapper"
                  type="password"
                  inputFieldClass="form-input font-18 fw-semi-bold"
                  placeholder="***************"
                  label="Re-enter Password"
                />
                <span className="editIcon">
                  <LuPencil />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="detailSec">
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold mb-1">Current Plan</h4>
              <p className="grey-clr">Your current plan supports</p>
              <p className="grey-clr">
                <strong>Basic</strong>
              </p>
              <p className="grey-clr">
                <strong>Monthly Reports - 1 Month / N 3,000</strong>
              </p>
            </div>
            <div className="col-md-6 text-end">
              <Button className="fw-normal" variant="light">
                Cancel Subscription
              </Button>
            </div>
            <div className="col-lg-6 mt-2">
              <div className="sec-top plan-comp">
                <p className="grey-clr">Monthly Plan</p>
                <p className="grey-clr font-24">
                  <strong>$5/monthly</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-2">
              <div className="sec-top plan-comp">
                <p className="grey-clr">Renew at</p>
                <p className="grey-clr font-24">
                  <strong>Nov 6, 2025</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-wrapper mt-5 d-flex gap-3">
          <Button className="fw-normal formBtm-btns" variant="light">
            Cancel
          </Button>
          <Button className="fw-normal formBtm-btns">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
