import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";


import Css from '../../assets/1.png';
import sql from '../../assets/2.png';
import Figma from '../../assets/5.png';
import Javascript from '../../assets/3.jpeg';
import Magento2 from '../../assets/4.png';
import Php from '../../assets/5.png';
import ReactJS from '../../assets/2.png';
import Tailwind from '../../assets/1.png';


const SkillsData = [
  {
    id: 1,
    image: Css, // غير الصورة لاحقاً
    title: 'Sales & Negotiation',
    disc: 'Achieving targets & closing deals',
  },
  {
    id: 2,
    image: Javascript, // غير الصورة لاحقاً
    title: 'Customer Relationship',
    disc: 'Building trust & long-term relations',
  },
  {
    id: 3,
    image: ReactJS, // غير الصورة لاحقاً
    title: 'Communication Skills',
    disc: 'Effective verbal & written communication',
  },
  {
    id: 4,
    image: Tailwind, // غير الصورة لاحقاً
    title: 'Time Management',
    disc: 'Organizing tasks under pressure',
  },
  {
    id: 5,
    image: Php, // غير الصورة لاحقاً
    title: 'Teamwork',
    disc: 'Collaborative learning & flexibility',
  },
  {
    id: 6,
    image: Figma, // غير الصورة لاحقاً
    title: 'Microsoft Office',
    disc: 'Word, Excel, PowerPoint, Outlook',
  },
  {
    id: 7,
    image: sql, // غير الصورة لاحقاً
    title: 'Digital Marketing',
    disc: 'Social media & campaign support',
  },
  {
    id: 8,
    image: Magento2, // غير الصورة لاحقاً
    title: 'Problem Solving',
    disc: 'Handling client inquiries effectively',
  },
];






function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Expreience</h2>


      <div className="container container_skills">
      {SkillsData.map(({ id, image, title, disc }) => (
        <article className="card_skill">
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
        </article>
      ))}
      </div>
    </section>
  );
}

export default Skills;