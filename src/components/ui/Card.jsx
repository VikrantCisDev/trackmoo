import React from "react";
import { Image } from "react-bootstrap";
import Button from "./Button";

const CommonCard = ({
  cardWrapper = "card-wrapper",
  imgWrapper = "img-wrapper",
  cardImg = "",
  alt = "Card Image",
  imgClass = "img-class",
  imgTag = "img-tag",
  children,
  cardBody = "card-body",
  gradeClass = "grade-class",
  grade = "",
  titleClass = "title-class",
  title = "",
  subTitleClass = "subtitle-class",
  subTitle = "",
  featuresClass = "features-class",
  features = [],
  priceClass = "price-class",
  price = "",
  cardBtnClass = "card-btn-class",
  cardBtn = "",
}) => {
  return (
    <div className={cardWrapper}>
      {cardImg && (
        <div className={`${imgWrapper} mb-3`}>
          <Image
            src={cardImg}
            alt={alt}
            className={`${imgClass} rounded w-100`}
          />
          {children && <span className={imgTag}>{children}</span>}
        </div>
      )}

      <div className={cardBody}>
        {grade && (
          <span className={`${gradeClass} cardGrade mb-2`}>{grade}</span>
        )}
        {title && (
          <h5 className={`${titleClass} mb-1 fw-semi-bold cardTitle`}>
            {title}
          </h5>
        )}
        {subTitle && <p className={`${subTitleClass} mb-1`}>{subTitle}</p>}
        {features &&
          features.map((item,key) => {
            return <p className={`${featuresClass} mb-1`} key={key}>{item}</p>
          })}
        {price && <h4 className={`${priceClass} mb-1 cardPrice`}>{price}</h4>}
        {cardBtn && (
          <Button className={`${cardBtnClass} w-100`}>{cardBtn}</Button>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
