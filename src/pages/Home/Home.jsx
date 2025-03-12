import React from "react";
import CommonCard from "../../components/ui/Card";
import image1 from "../../assets/images/Card1.jpg";
import image2 from "../../assets/images/card2.jpg";
import image3 from "../../assets/images/card3.jpg";
import image4 from "../../assets/images/card4.jpg";
import Verfied from "../../assets/images/verify.png";
import Button from '../../components/ui/Button';
import Search from '../../components/ui/Search';
import { IoMdAdd } from "react-icons/io";
import CustomDropdown from '../../components/ui/Dropdown';
import { IoFilterOutline } from "react-icons/io5";
import CustomPagination from "../../components/ui/Pagination";
import { GoVerified } from "react-icons/go";
import CustomBreadcrumb from "../../components/ui/Breadcrumb";


const Home = () => {
  const cardData = [
    {
      id: 1,
      image: image1,
      title: "Cattle",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 2,
      image: image2,
      title: "Goat",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 3,
      image: image3,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 4,
      image: image4,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 5,
      image: image1,
      title: "Cattle",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 6,
      image: image2,
      title: "Goat",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 7,
      image: image3,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 8,
      image: image4,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 9,
      image: image1,
      title: "Cattle",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 10,
      image: image2,
      title: "Goat",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 11,
      image: image3,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
    {
      id: 12,
      image: image4,
      title: "Sheep",
      subTitle: "Bob Mould is celebrating the new year",
      features: [
        { type: "detail", label: "Weight", value: "50KG" },
        { type: "detail", label: "Age", value: "14 Years" },
        { type: "detail", label: "Location", value: "USA" }
      ],
      cardBtn: "Buy",
      price: "$22000",
      grade: "A Grade",
      tag: { img: Verfied, title: "Verified", type: 1 }
    },
  ];

  const filter = ["action","action2","action3"]


  return (
    <div className="px-64">
      <CustomBreadcrumb active={"Livestock Marketplace"}/>
      <div className="dash-container">
        <div className="top-bar mb-20">
          <h2>Livestock Marketplace</h2>
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
              tag={item.tag}
              cardImg={item.image}
              title={item.title}
              grade={item.grade}
              subTitle={item.subTitle}
              features={item.features}
              cardBtn={item.cardBtn}
              price={item.price}
            />
          ))}
        </div>
        <div className="paginationWrapper mt-4">
          <CustomPagination/>
        </div>
      </div>
    </div>
  );
};

export default Home;
