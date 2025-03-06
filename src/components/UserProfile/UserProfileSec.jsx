import React from 'react';
import Button from '../ui/Button';
import { Image } from 'react-bootstrap';

const UserProfileSec = ({ 
  title = 'User Profile', 
  profileImgClass = '', 
  profileImg = 'https://via.placeholder.com/100', 
  alt = 'Profile Image', 
  profileBtnWrapper = '',
  imgtxtWrapper,
  onRemoveImage,
  titleClass,
  onChangeImage,
}) => {
  return (
    <div className='userProfileSec'>
      {title && <p className={`${titleClass} fw-bold`}>{title}</p>}
      <div className={`${imgtxtWrapper}`}>
        {profileImg && (
          <div className={profileImgClass}>
            <Image src={profileImg} alt={alt}  fluid />
          </div>
        )}
        {profileBtnWrapper && (
          <div className={`${profileBtnWrapper}`}>
            <Button onClick={onChangeImage}>Change Image</Button>
            <Button variant='light' onClick={onRemoveImage}>Remove</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileSec;