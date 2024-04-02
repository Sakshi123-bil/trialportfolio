import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/Javascript.png";
import  react from "../../images/react.png";
import "./style.scss";

const data = [
    {
       icon:<i class="fa-brands fa-html5"></i>,
       tech:"HTML",
       tag:"frontend",
    },
    {
        tech:"CSS",
        tag:"frontend",
     },
     {
        tech:"JavaScript",
        tag:"frontend",
     },
     {
        tech:"React/Redux",
        tag:"frontend",
     },
     {
        tech:"Node js",
        tag:"backend"
     },
     {
        tech:"Express js",
        tag:"backend"
     },
     {
        tech:"MongoDB",
        tag:"backend"
     },
     {
        tech:"MySQL",
        tag:"backend"
     },
     {
        tech:"C",
        tag:"languages"
     },
     {
        tech:"C++",
        tag:"languages"
     },
     
     {
        tech:"Java",
        tag:"languages"
     },
     {
        tech:"Python",
        tag:"languages"
     },
     {
         tech:"Github",
         tag:"tool"
     },
     {
         tech:"Netlify",
         tag:"tool"
     },
     {
         tech:"Android Studio",
         tag:"tool"
     },
     {
        tech:"Postman",
        tag:"tool"
     }

     
];
//this will give you the another array 
const frontendArray = data.filter(item=>item.tag.includes("frontend"));
const backendArray = data.filter(item=>item.tag.includes("backend"));
const languages = data.filter(item=>item.tag.includes("languages"));
const tools = data.filter(item=>item.tag.includes("tool"));

const Skills = () => {
    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            ></PageHeaderContent>

            <div className="skill">
                <div className="skill__container">
                    <h1> &nbsp; FRONT END &nbsp;</h1>
                    <div className="skill__container__innerContent">
                    {
                        frontendArray.map((item)=>{
                            return(
                               <p><i className="fa-brands fa-html5"></i>{item.tech}</p>
                            )
                           
                        })
                    }
                    </div>
                    
                </div>
                <div className="skill__container">
                    <h1> &nbsp; BACK END&nbsp;</h1>
                    <div className="skill__container__innerContent">
                        {
                            backendArray.map((item)=>{
                                return(
                                    <p>{item.tech}</p>
                                )
                            })
                        }
                    </div>
                   
                </div>
                <div className="skill__container">
                    <h1> &nbsp; LANGUAGES&nbsp;</h1>
                    <div className="skill__container__innerContent">
                        {
                            languages.map(item=>{
                                return(
                                    <p>{item.tech}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="skill__container">
                    <h1> &nbsp; TOOLS &nbsp;</h1>
                    <div className="skill__container__innerContent">
                        {
                            tools.map(item=>{
                                return(
                                    <p>{item.tech}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;