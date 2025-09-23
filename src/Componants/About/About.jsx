import './About.css'
import ME from '../../assets/laithabout.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
              <div className="about_me-image">
                <img src={ME} alt="About Image" />
              </div>
          </div>

          <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                  <FaAward className='about_icon' />
                  <h5>Experience</h5>
                  <small>2+ years in Full Stack Development</small>
                </article>

                <article className="about_card">
                  <FiUsers className='about_icon' />
                  <h5>Clients</h5>
                  <small>Worked with startups & businesses worldwide</small>
                </article>

                <article className="about_card">
                  <VscFolderLibrary className='about_icon' />
                  <h5>Projects</h5>
                  <small>Dozens of Magento 2 & Web Projects</small>
                </article>
              </div>

              <p>
                I'm a passionate <strong>Full Stack Developer</strong> specialized in 
                <strong> Magento 2</strong> and modern web technologies.  
                I build custom extensions, optimize performance, integrate APIs, and craft 
                tailored solutions that help businesses grow.  
                With experience in <strong>React</strong> and backend development, 
                I aim to deliver scalable, clean, and efficient software.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About
