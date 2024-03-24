/* eslint-disable no-unused-vars */
import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent';
import './style.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const personalDetails = [
  {
    label: "Name",
    value: "Sakshi Padamwar",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "India"
  },
  {
    label: "Email",
    value: "sakshipadamwar2002@gmail.com"
  },
  {
    label: "Contact No",
    value: "+91 7620685369"
  },
];


const About = () => {
  return (
    <section id="about" className="about">

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      ></PageHeaderContent>



      <div className="about__content">
        <div className="about__content__personalWrapper">

          <h3>Welcome to my Portfolio! </h3>
          <p>
            I am a passionate and versatile developer with expertise across multiple domains in the tech world. With a background in Full Stack Web Development,
            Android App Development, and Frontend Development, I bring a holistic approach to crafting digital solutions that seamlessly blend functionality with aesthetics.
            <br></br>

            As a Full Stack Web Developer, I thrive on turning ideas into fully functional web applications. My proficiency in both frontend and backend technologies allows me to create dynamic and interactive user experiences.
            From conceptualizing the architecture to implementing databases and APIs, I am committed to delivering robust and scalable web solutions.
            <br></br>
            In the realm of Android Development, I have honed my skills in creating impactful mobile applications that cater to a diverse user base.
            Leveraging the latest tools and technologies, I design and build apps that combine intuitive interfaces with efficient performance, ensuring a seamless experience across various devices.
            <br></br>
           
          </p>


          <h3 className="personalInformationHeaderText">Personal Information</h3>
          <ul>
            {

              personalDetails.map((item, i) => (


                <li key={i}>
                  <span className="title">{item.label} : </span>
                  <span className="value">{item.value}</span>
                </li>

              ))

            }
          </ul>

        </div>
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)"></FaDev>
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)"></DiAndroid>
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)"></FaDatabase>
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)"></DiApple>
            </div>
          </div>

        </div>
      </div>
    </section>


  );
}

export default About;