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

  const codeBlock3 = `
  router.post(
  "/chats/delete/:chatroomId",
  passport.authenticate("jwt", { session: false }), 
  async(req, res) => {
  const { chatroomId } = req.params;
  try{
      const deleteChat = await prisma.chatroom.delete({
    where: {
      id: chatroomId,
    },
  });
  res.json({
      success:true,
  })
} catch(err) {
  res.json({
      success:false,
      error:err,
  })
  }
 })
  `
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
          <pre style = {{background: "rgb(250, 250, 250);",direction: "ltr",}}>
            <code>const [background, setBackground] = useState(null);</code>
            <code>{codeBlock1}</code>
            <code>{codeBlock2}</code>
          </pre>
        </div>
        <div>
          <p><em>Sample</em></p>
          <pre>
            <code>
              {codeBlock3}
            </code>
          </pre>
        </div>
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

//maybe add moving background
//add cool card effect hover for the about me
//add a moving carousel of tech skills
//add glassmorphism for experiences
