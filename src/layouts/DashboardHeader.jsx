import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.svg";
import avatar from "../assets/Images/avatar.png";
import notification from "../assets/Images/notification.svg";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Search from "../components/ui/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DashboardHeader({ toggleSidebar }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header id="dashboard-header">
      <nav className="navBar">
        <Container
          className="d-flex justify-content-between align-items-center"
          fluid
        >
          <div className="leftWrapper">
            <button onClick={toggleSidebar} className="toggle-btn">
              <GiHamburgerMenu size={25} color="#488B2E"/>
            </button>
          </div>

          <div className="middleWrapper">
            <Search
              bgColor="#f5fbf2"
              searchContainer="headerSearch"
              onSearch={(query) => console.log("Searching for:", query)}
            />

            <Button
              variant="primary"
              className="searchModalBtn"
              onClick={handleShow}
            >
              <AiOutlineSearch />
            </Button>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Body>
                <Search
                  onSearch={(query) => console.log("Searching for:", query)}
                />
              </Modal.Body>
            </Modal>
          </div>

          <div className="rightWrapper">
            <Nav.Link as={Link} to="" className="notification-bell" >
              <img
                src={notification}
                alt="Notification"
                className="img-fluid hIcon"
              />
            </Nav.Link>

            <NavDropdown
              id="profilePic"
              className="header-user"
              title={
               <>
                  <img src={avatar} alt="profile-pic" />
                  <p className="font-14"><span className="fw-semi-bold">John Parker</span>
                  Admin</p>
                </>
              }
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default DashboardHeader;
