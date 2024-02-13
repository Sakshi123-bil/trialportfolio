import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
const Skills = () => {
    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            ></PageHeaderContent>
        </section>
    )
}

export default Skills;