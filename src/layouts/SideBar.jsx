import React from 'react'
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";

import Logo from '../assets/Images/trackmoologo.png'
import DashboardIcon from '../assets/Images/dashboard.svg'
import LivestockIcon from '../assets/Images/livestock.svg'
import MapIcon from '../assets/Images/map.svg'
import StockShopIcon from '../assets/Images/stock-shop.svg'
import SubscriptionIcon from '../assets/Images/subscription.svg'
import settingIcon from '../assets/Images/settingIcon.svg'
import logoutIcon from '../assets/Images/logoutIcon.svg'

const SideBar = ({ isOpen }) => {
    return (
        <>
            <div  className={`sideBar ${isOpen ? "open" : ""}`}>
                <div className='sidebarWrapper d-flex flex-column justify-content-between h-100'>
                    <div className='sideBarTop'>
                    <div className="sidebarLogo text-center">
                    <img src={Logo} alt="postFeed" className='img-fluid' />
                    </div>

                        <Nav className="sidebarNavLinks">

                            <Nav.Link href="" className='active'>
                                <div className='d-flex gap-2'>
                                    <img src={DashboardIcon} alt="postFeed" className='img-fluid' />
                                    Dashboard
                                </div>
                            </Nav.Link>
                            <Nav.Link href="" className=''>
                                <div className='d-flex gap-2'>
                                    <img src={LivestockIcon} alt="postFeed" className='img-fluid' />
                                    Livestock
                                </div>
                            </Nav.Link>
                            <Nav.Link href="" className=''>
                                <div className='d-flex gap-2'>
                                    <img src={MapIcon} alt="postFeed" className='img-fluid' />
                                    Map
                                </div>
                            </Nav.Link>
                            <Nav.Link href="" className=''>
                                <div className='d-flex gap-2'>
                                    <img src={StockShopIcon} alt="postFeed" className='img-fluid' />
                                    Livestock Marketplace
                                </div>
                            </Nav.Link>
                            <Nav.Link href="" className=''>
                                <div className='d-flex gap-2'>
                                    <img src={SubscriptionIcon} alt="postFeed" className='img-fluid' />
                                    Subscription
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='sideBarBottom'>


                        <Nav className="sidebarNavLinks">


                            <Nav.Link href="">
                                <div className='d-flex gap-2'>
                                    <img src={settingIcon} alt="settingIcon" className='img-fluid' />
                                    Settings
                                </div>
                            </Nav.Link>
                            <Nav.Link href="">
                                <div className='d-flex gap-2'>
                                    <img src={logoutIcon} alt="logoutIcon" className='img-fluid' />
                                    Log Out
                                </div>
                             
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar