import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { education} from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const EducationCard = ({ education }) => { 
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={education.icon}
            alt={education.institution_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.degree}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {education.institution_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.details.map((detail, index) => (
          <li
            key={`education-detail-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {detail}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
<div>

<motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10`}>
        Education Background.
        </p>
        <p className={`${styles.sectionHeadTexts} text-center`}>
        "Though the path of education is tough, its rewards are rewarding."      
      </p>
      </motion.div>


      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((education, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div> 
    </div>

        )}

export default SectionWrapper(Education, "work");

