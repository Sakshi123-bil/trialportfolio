import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
const Resume = ()=>{

    return(
    <section id="about" className="about">
   
    <PageHeaderContent
    headerText="My Resume"
    icon = {<BsInfoCircleFill size={40}/>}
    ></PageHeaderContent>
     </section>
    );
}

export default Resume;