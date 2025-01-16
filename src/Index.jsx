import { useState } from 'react';
import MegaScroll from 'react-mega-scroll';
import GitHubIcon from "@mui/icons-material/Github";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css'

function Index() {
 
  return (
    <MegaScroll>
      <section id = "first">
        <div>Hello, I am</div>
        <div>David Bottenberg</div>
        <div>Based in Morrisville, NC</div>
        <div>
          <GitHubIcon sx={{fontSize:40}}/>
          <LinkedInIcon sx={{fontSize:40}}/>
          <InstagramIcon sx={{fontSize:40}}/>
        </div>
      </section>
      <section id = "second">
        <div>About Me</div>
        <div>Tech Skills</div>
        <div>Experiences</div>
      </section>
      <section id = "third">
        <div>
          <h2>Front End</h2>
          <p>Proficiently creating responsive and <br/>elegent front end designs</p>
        </div>
        <div>
          <button>Click Me!</button>
        </div>
        <div>sample</div>
        <div>Back End</div>
      </section>
    </MegaScroll>
  )
}

export default Index
