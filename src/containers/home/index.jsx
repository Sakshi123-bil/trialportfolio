import React from "react";
import  './style.scss';
const Home = ()=>{
    return(
       <section id="home" className="home">
            <div className="home__text-wrapper">
                   <h1>Hello , I'm Sakshi <br/>Full Stack Developer</h1>
                  
                   
            </div>
            <div className="home__contact-me">
               <button>Hire Me</button>
            </div>
       </section>
    )
}

export default Home;