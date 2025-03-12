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
  tag,
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
    <div className={`${cardWrapper} position-relative`}>
      {cardImg && (
        <div className={`${imgWrapper} mb-3`}>
          <Image
            src={cardImg}
            alt={alt}
            className={`${imgClass} rounded w-100`}
          />
          {tag && <div className={`img-tag  ${tag.type === 1 ? "greenTag":""} `}>
            <img src={tag.img} alt={tag.title} />{tag.title}
          </div>}
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
        {features && <div className="featured font-14">
          {features.map((feature, index) => (
            feature.type === "text" ? (
              <p key={index} className={`${featuresClass} mb-1`}>{feature.content}</p>
            ) : (
              <p key={index} className={`${featuresClass} mb-1`}>
                <strong>{feature.label}:</strong> {feature.value} 
              </p>
            )
          ))}
          </div>
          }
        {price && <h4 className={`${priceClass} mb-1 cardPrice`}>{price}</h4>}
        {cardBtn && (
          <Button className={`${cardBtnClass} w-100 mt-3`}>{cardBtn}</Button>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
