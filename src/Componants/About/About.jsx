import './About.css'
import ME from '../../assets/laithabout.jpeg' // هون بدك تحطي صورة Farah إذا عندك
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
                  <small>1+ year in Direct & B2B Sales</small>
                </article>

                <article className="about_card">
                  <FiUsers className='about_icon' />
                  <h5>Clients</h5>
                  <small>Worked with corporate & individual customers</small>
                </article>

                <article className="about_card">
                  <VscFolderLibrary className='about_icon' />
                  <h5>Roles</h5>
                  <small>Sales Executive, Account Manager, Field Sales</small>
                </article>
              </div>

              <p>
                I'm <strong>Farah Iyad Mustafa Muhmoud</strong>, a motivated 
                <strong> Sales Professional</strong> with experience in promoting and 
                selling telecom and technology services.  
                Skilled in <strong>direct sales, account management, and customer relationship building</strong>,  
                with a proven record of achieving sales targets and delivering tailored solutions.  
                I hold a <strong>Bachelor's degree in Business Economics</strong> from 
                The University of Jordan, and I bring strong communication, negotiation, and 
                problem-solving skills to every role I take on.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Connect</a>
          </div>
        </div>
    </section>
  )
}

export default About
