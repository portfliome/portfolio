import React from 'react'
import { FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";

function Homesocial() {
  return (
    <div className='homesocials'>
        <a href="https://www.linkedin.com/in/farah-mhmoud-b4ba19321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href="https://www.instagram.com/maraktingbyfarah?igsh=MWo1enNzMTQyZG00cg==" target='_blank' rel="noreferrer"><FaInstagram/></a>
        <a href="#" target='_blank' rel="noreferrer"><FaDribbble/></a>
    </div>
  )
}

export default Homesocial
