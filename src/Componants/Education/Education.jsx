import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      id: 1,
      title: 'Bachelor Degree',
      subtitle: 'The University of Jordan',
      details: 'Business Economics',
      period: '2019 - 2023'
    },
    {
      id: 2,
      title: 'Sales Trainee',
      subtitle: 'Arabia Connect',
      details: 'Outbound calls, telesales & customer communication',
      period: '3 months'
    },
    {
      id: 3,
      title: 'Sales Executive',
      subtitle: 'Romex Dubai (Apple Authorized Reseller)',
      details: 'Promoted and sold Apple products, supported store operations',
      period: '3 months'
    },
    {
      id: 4,
      title: 'Account Manager - B2B Sales',
      subtitle: 'Zain Jordan',
      details: 'Managed business client accounts & delivered tailored telecom solutions',
      period: '—'
    },
    {
      id: 5,
      title: 'Field Sales Representative - B2C',
      subtitle: 'Umniah',
      details: 'Promoted mobile services & achieved daily/monthly targets',
      period: '—'
    },
    {
      id: 6,
      title: 'Finance Trainee',
      subtitle: 'Dar Al-Dawa',
      details: 'Supported finance department & accounting documentation',
      period: '—'
    },
    {
      id: 7,
      title: 'Training Courses',
      subtitle: 'Edraak Center',
      details: 'ICDL | Introduction to Human Resource Management',
      period: '—'
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
