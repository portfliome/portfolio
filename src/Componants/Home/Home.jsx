import './Home.css'
import Me from '../../assets/farah.png'
import CV from'../..//assets/Cv Farah .pdf'
import Homesocial from './Homesocial'



function Home() {
  return (
    <div id="home" className='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Farah Muhmoud</h1>
        <h4 className="text-light">Account Manager & Sales Representative</h4>

        <div className="btns">
          <a href={CV} className="btn" download>Download CV</a>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
       

        <div className="me">
          <img src={Me} alt="Laith Barakat" />
        </div>
        <a href="#about" className="scroll_down">Scroll Down</a>

      <Homesocial/>
      </div>
      
    </div>
  )
}

export default Home
