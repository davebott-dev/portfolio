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
        This text should appear next
      </section>
      <section id = "third">
        This text should appear Last
      </section>
    </MegaScroll>
  )
}

export default Index
