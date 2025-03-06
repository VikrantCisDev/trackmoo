import React from 'react'
import UserProfileSec from '../../components/UserProfile/UserProfileSec'
import profileImg from '../../assets/images/profileImg.png'
import './UserProfile.css'
import Input from '../../components/ui/input'

const UserProfile = () => {
    return (
        <div>
            <div className="dash-container">
                <div className="top-bar">
                    <h2>User Profile</h2>
                </div>

                <UserProfileSec
                    profileImg={profileImg}
                    titleClass="titleClass"
                    title='User Image '
                    profileBtnWrapper="profileBtnWrapper"
                    imgtxtWrapper="imgtxtWrapper"
                />
                <div className='InputWrapper'>
                    <div className="twoInputs">
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile