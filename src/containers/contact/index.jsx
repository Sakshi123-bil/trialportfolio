import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
const Contact = ()=>{
    return(
        <section id="about" className="about">
   
        <PageHeaderContent
        headerText="My Contact"
        icon = {<BsInfoCircleFill size={40}/>}
        ></PageHeaderContent>
         </section>
    )
}

export default Contact;