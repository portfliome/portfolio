import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    image: '', // ضع رابط الصورة هنا
    title: 'Project 1',
    tools: 'React, Node.js',
    demo: '' // ضع رابط الديمو إذا موجود
  },
  {
    id: 2,
    image: '',
    title: 'Project 2',
    tools: 'Vue, Firebase',
  },
  {
    id: 3,
    image: '',
    title: 'Project 3',
    tools: 'Angular, API',
    demo: ''
  },
  // أضف مشاريعك هنا بنفس الشكل
];

function Projects() {
  return (
    <section id='projects'>
      <h5>Some of My Work</h5>
      <h2>Projects</h2>

      <div className="projects_container">
        {projectsData.map(({ id, image, title, tools, demo }) => (
          <div key={id} className="project_card">
            <div className="project_img">
              <img src={image} alt={title} />
            </div>
            <div className="project_content">
              <h3>{title}</h3>
              <p className="project_tools">{tools}</p>
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="btn btn-demo">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
