import React from "react";
import CommonCard from "../../components/ui/Card";
import image1 from "../../assets/images/Card1.jpg";
import image2 from "../../assets/images/card2.jpg";
import image3 from "../../assets/images/card3.jpg";
import image4 from "../../assets/images/card4.jpg";
import Button from '../../components/ui/Button';
import Search from '../../components/ui/Search';
import { IoMdAdd } from "react-icons/io";
import CustomDropdown from '../../components/ui/Dropdown';
import { IoFilterOutline } from "react-icons/io5";

const Home = () => {
  const cardData = [
    {
      id: 1,
      image: image1,
      title: "Cattle",
      subTitle: "Bob Mould is celebrating the new year ",
      features: [],
    },
    {
      id: 2,
      image: image2,
      title: "Goat",
      subTitle: "Bob Mould is celebrating the new year ",
      features: [],
    },
    {
      id: 3,
      image: image3,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year ",
      features: [],
    },
    {
      id: 4,
      image: image4,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year ",
      features: [],
    },
  ];
  const filter = ["action","action2","action3"]


  return (
    <div className="px-64">
      <div className="dash-container">
        <div className="top-bar mb-20">
          <h1>Livestock Marketplace</h1>
          <div className="top-bar-right">
            <Search />
            <CustomDropdown options={filter} className="filter">
              <IoFilterOutline className="me-2" size={23} color="#A6A6A6" />
              Filter
            </CustomDropdown>
            <Button className="fw-normal dash-sellBtn w-100">
              <IoMdAdd size={22} /> List/ Sell Livestock
            </Button>
          </div>
        </div>
        <div className="cardOuter ">
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
    </div>
  );
};

export default Home;
