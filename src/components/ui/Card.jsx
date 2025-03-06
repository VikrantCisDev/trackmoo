import React from 'react';
import { Image } from 'react-bootstrap';
import Button from './Button';

const CommonCard = ({
    cardWrapper = 'card-wrapper',
    imgWrapper = 'img-wrapper',
    cardImg = '', 
    alt = 'Card Image',
    imgClass = 'img-class',
    imgTag = 'img-tag',
    children,
    cardBody = 'card-body',
    gradeClass = 'grade-class',
    grade = '',
    titleClass = 'title-class',
    title = '',
    subTitleClass = 'subtitle-class',
    subTitle = '',
    featuresClass = 'features-class',
    features = '',
    priceClass = 'price-class',
    price = '',
    cardBtnClass = 'card-btn-class',
    cardBtn = '' 
}) => {
    return (
        <div className={cardWrapper}>
            {cardImg && (
                <div className={imgWrapper}>
                    <Image src={cardImg} alt={alt} className={`${imgClass} rounded w-100`} />
                    {children && <span className={imgTag}>{children}</span>}
                </div>
            )}

            <div className={cardBody}>
                {grade && <small className={gradeClass}>{grade}</small>}
                {title && <h5 className={titleClass}>{title}</h5>}
                {subTitle && <p className={subTitleClass}>{subTitle}</p>}
                {features && <p className={featuresClass}>{features}</p>}
                {price && <h4 className={priceClass}>{price}</h4>}
                {cardBtn && <Button className={cardBtnClass}>{cardBtn}</Button>} 
            </div>
        </div>
    );
};

export default CommonCard;
