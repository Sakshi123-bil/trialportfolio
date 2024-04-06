import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { useState } from "react";
import ImageOne from"../../images/html.png";
import ImageTwo from"../../images/html.png";
import ImageThree from"../../images/html.png";
import ImageFour from"../../images/html.png";
import ImageFive from"../../images/html.png";
const portfolioData = [
    {
      id: 2,
      name: "Ecommerce",
      image: ImageOne,
      link: "",
    },
    {
      id: 3,
      name: "Notes App",
      link: "",
      image: ImageTwo,
    },
    {
      id: 2,
      name: "Supplier Design",
      image: ImageThree,
      link: "",
    },
    {
      id: 2,
      name: "Todo App",
      image: ImageFour,
  
      link: "",
    },
    {
      id: 3,
      name: "Shopping cart design",
      image: ImageFive,
      link: "",
    },
  ];

  const filterData = [
    {
      filterId: 1,
      label: "All",
    },
    {
      filterId: 2,
      label: "Developement",
    },
    {
      filterId: 3,
      label: "Design",
    },
  ];
const Portfolio = ()=>{
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);
  
    function handleFilter(currentId) {
      setFilteredValue(currentId);
    }
  
    function handleHover(index) {
      setHoveredValue(index);
    }
  
    console.log("====================================");
    console.log(hoveredValue);
    console.log("====================================");
  
    const filteredItems =
      filteredvalue === 1
        ? portfolioData
        : portfolioData.filter((item) => item.id === filteredvalue);
  
    console.log(filteredItems);
    return(
        <section id="about" className="about">
   
   <PageHeaderContent
   headerText="My portfolio"
   icon = {<BsInfoCircleFill size={40}/>}
   ></PageHeaderContent>

<div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
        
    </section>
    )
}

export default Portfolio;