import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      id: 1,
      title: 'Bachelor Degree',
      subtitle: 'Yarmouk University',
      details: 'Computer Information Systems',
      period: '2019 - 2023'
    },
    {
      id: 2,
      title: 'Online Courses',
      subtitle: 'Udemy',
      details: 'Web Development, .NET, React',
      period: '2022'
    },
    {
      id: 3,
      title: 'Internship',
      subtitle: 'Polaris',
      details: 'Web Development Training',
      period: '2025'
    },
    {
      id: 4,
      title: 'Work Experience',
      subtitle: 'Shopyard',
      details: 'Front-End & Back-End Development',
      period: '2025 - Present'
    }
  ];

  return (
    <section id='education'>
      <h5>My Journey</h5>
      <h2>Education & Experience</h2>

      <div className="education_container">
        {educationData.map(({ id, title, subtitle, details, period }) => (
          <div key={id} className="education_card">
            <div className="education_content">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <p>{details}</p>
              <span className="education_period">{period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
