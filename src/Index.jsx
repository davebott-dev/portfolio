import { useState } from "react";
import MegaScroll from "react-mega-scroll";
import GitHubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./App.css";

function Index() {
  const [background, setBackground] = useState(null);

  const randomColor = () => {
    const choices = [..."0123456789ABCDEF"];
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += choices[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const codeBlock1 = `const randomColor = () => { 
    const choices = [..."0123456789ABCDEF"];

    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += choices[Math.floor(Math.random() * 16)];
    }
      return color;`;
  const codeBlock2 = `<button style={{ background }} onClick={() => setBackground(randomColor)}>
            Click Me! </button>`;

  return (
    <MegaScroll>
      <section id="first">
        <div>Hello, I am</div>
        <div>David Bottenberg</div>
        <div>Based in Morrisville, NC</div>
        <div>
          <GitHubIcon sx={{ fontSize: 40 }} />
          <LinkedInIcon sx={{ fontSize: 40 }} />
          <InstagramIcon sx={{ fontSize: 40 }} />
        </div>
      </section>
      <section id="second">
        <div>
          <h2>About Me</h2>
          <div>The Creator</div>
          <div>The Athlete</div>
          <div>The Developer</div>
          <div>The Person</div>
        </div>
        <div>Tech Skills</div>
        <div>Experiences</div>
      </section>
      <section id="third">
        <div>
          <h2>Front End</h2>
          <p>
            Proficiently creating responsive and <br />
            elegent front end designs
          </p>
        </div>
        <div>
          <button
            style={{ background }}
            onClick={() => setBackground(randomColor)}
          >
            Click Me!
          </button>
          <div>
            <code>const [background, setBackground] = useState(null);</code>
            <code>{codeBlock1}</code>
            <code>{codeBlock2}</code>
          </div>
        </div>
        <div>sample</div>
        <div>
          <h2>Back End</h2>
          <p>
            Specialize in building REST APIs using <br />
            Prisma ORM (Postgresql), Express, React, and NodeJs
          </p>
        </div>
      </section>
    </MegaScroll>
  );
}

export default Index;
