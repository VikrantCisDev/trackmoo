import React from 'react'
import Button from '../ui/Button';
import SubscriptionCard from './SubscriptionCards';

const StepFour = ({ nextStep = () => { }, prevStep = () => { } }) => {
  return (

    <>

      <div className='sectionpadding mx-auto'>

        <div className='mb-4 text-center'>
          <h2 className='fw-bold'>Livestock Management Subscription Plan</h2>
        </div>

        <div className='subsCardWrapper'>
          <SubscriptionCard
            title="Basic"
            description="Monthly Reports - 1 Month"
            price={5}
            buttonVariant="light"
            currency="$"
            localPrice="N1500"
            duration="1 Month"
            notIncludedIndexes={[4, 5]}
            features={[
              `Herding (Basic monitoring)`,
              `Veterinary Care (Routine health checks)`,
              `RFID Tagging (Mandatory one-time fee per livestock)`,
              `Insurance (Not included)`,
              ` Loan Access (Not included)`,
            ]}
            wrapperClass="customWrapper"
            cardClass="customCard px-4"
          />

          <SubscriptionCard
            title="Advance"
            description="Bi- Weekly Reports - 3 Months"
            price={3}
            buttonVariant="light"
            currency="$"

            localPrice="N1200"
            duration="1 Month"
            features={[
              `Herding (Standard monitoring & grazing)`,
              `Veterinary Care (Health checks + minor treatments)`,
              `RFID Tagging (Mandatory one-time fee per livestock`,
              `Insurance (Optional coverage available)`,
              `Loan Access (Not included)`,

            ]}
            wrapperClass="customWrapper "
            cardClass="customCard activeCard"
            notIncludedIndexes={[5]}
          />

          <SubscriptionCard
            title="Premium"
            description="Weekly Reports - 6 Months & Above"
            price={1}
            buttonVariant="light"
            currency="$"
            localPrice="N1000"
            duration="1 Month"
            features={[
              `Herding (Advanced monitoring & security)`,
              `Veterinary Care (Full health coverage, vaccinations & treatments)`,
              `RFID Tagging (Mandatory one-time fee per livestock)`,
              `Insurance (Optional coverage available)`,
              `Loan Access (Apply for livestock-related financial support)`,

            ]}

            
            wrapperClass="customWrapper"
            cardClass="customCard px-4"
          />


          <SubscriptionCard
            title="Custom Plan"
            description="Flexible"
            price="&nbsp;"
            buttonVariant="light"
            currency=""
            localPrice="&nbsp;"
            duration="&nbsp;"
            durationClass="d-none"
            features={[
              `Select all features as needed`,
              
            ]}
            wrapperClass="customWrapper"
            cardClass="customCard px-4"
          />



        </div>

      </div>
    </>
  )
}

export default StepFour