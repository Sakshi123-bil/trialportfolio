import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
const Portfolio = ()=>{
    return(
        <section id="about" className="about">
   
   <PageHeaderContent
   headerText="My portfolio"
   icon = {<BsInfoCircleFill size={40}/>}
   ></PageHeaderContent>
    </section>
    )
}

export default Portfolio;