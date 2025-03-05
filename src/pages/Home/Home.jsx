import React from 'react';
import CommonCard from '../../components/ui/Card';
import image1 from '../../assets/images/Card1.jpg'

const Home = () => {

  const cardData = [
    {
      id: 1, image: image1, title: 'Cattle', subTitle: 'Bob Mould is celebrating the new year ', features: [
       
      ]
    }
  ]


  return (
    <div className='px-64'>
      <div className="cardOuter">
        {cardData.map((item) => (
          <CommonCard
            key={item.id}
            cardImg={item.image}
            title={item.title}
            subTitle={item.subTitle}
            features={item.features}
          />
        ))}

      </div>
    </div>
  );
};

export default Home;
