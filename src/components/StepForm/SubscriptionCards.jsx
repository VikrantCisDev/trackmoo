import React from 'react';
import  Button  from '../ui/Button';
const SubscriptionCard = ({
    title = 'Basic',
    description = 'Monthly Reports',
    price = 5,
    currency = '$',
    localPrice = 'N1500',
    duration = '1 Month',
    features = [],
    notIncludedIndexes = [], // <-- Accept excluded indexes
    wrapperClass = 'subsCardWrapper',
    cardClass = 'subsCard',
    headClass = 'cardHead',
    bodyClass = 'cardBody',
    durationClass,
    priceClass = 'priceSec',
    buttonVariant = 'light'
  }) => {
    return (
      <div className={wrapperClass}>
        <div className={cardClass}>
          <div className={headClass}>
            <h2 className='fw-bolder'>{title}</h2>
            <p>{description}</p>
            <div className={priceClass}>
              <h1 className='font-56 fw-semi-bold'>
                {currency}{price} <span className={`${durationClass}`}> / {localPrice} / {duration}</span>
              </h1>
              <Button variant={buttonVariant}>Get Started Now</Button>
            </div>
          </div>
          <div className={bodyClass}>
            <ul>
              {features.map((feature, index) => {
                const notIncluded = notIncludedIndexes.includes(index) ? "notIncluded" : "";
                return (
                  <li key={index} className={`featureList ${notIncluded}`}>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default SubscriptionCard;
  