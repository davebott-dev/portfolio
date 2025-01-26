import { useState } from "react";
import {Link} from "react-router-dom";
import MegaScroll from "react-mega-scroll";
import { Tooltip } from "@mui/material";
import { ReactTyped } from "react-typed";
import GitHubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import VideocamIcon from "@mui/icons-material/Videocam";
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
  `;
  return (
    <MegaScroll>
      <section id="first">
        <div>Hello, I am</div>
        <div>
          <ReactTyped
            strings={[
              "David Bottenberg",
              "A Student",
              "An Aspiring Software Developer",
              "A Tech Enthusiast",
              "A Leader",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div>Based in Morrisville, NC</div>
        <div>
          <a href="https://github.com/davebott-dev">
            <GitHubIcon sx={{ fontSize: 40, color: "inherit" }} />
          </a>
          <a href="https://www.linkedin.com/in/david-bottenberg-7ab9381a7/">
            <LinkedInIcon sx={{ fontSize: 40, color: "inherit" }} />
          </a>
          <a href="https://www.instagram.com/david.bottenberg/?hl=en">
            <InstagramIcon sx={{ fontSize: 40, color: "inherit" }} />
          </a>
        </div>
      </section>
      <section id="second">
        <div>
          <h2>About Me</h2>
          <div>
            <Link to="/about-me">
              <div className="card">
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon">
                      <i className="fa fa-user-circle">
                        <VideocamIcon sx={{ fontSize: 100 }} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="content">
                    <h3>The Creator</h3>
                    <p>
                      David enjoys creating content and has amassed almost 1
                      million followers across all of his social media platforms
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="about-me">
              <div className="card">
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon">
                      <i className="fa fa-user-circle">
                        <SportsBasketballIcon sx={{ fontSize: 100 }} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="content">
                    <h3>The Athlete</h3>
                    <p>
                      David is a former Division 1 basketball player and Pro
                      Athlete who still continues to enjoy the game of basketball
                      today!
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to ="about-me"> 
              <div className="card">
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon">
                      <i className="fa fa-user-circle">
                        <CodeIcon sx={{ fontSize: 100 }} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="content">
                    <h3>The Developer</h3>
                    <p>
                      David has taught himself how to code using{" "}
                      <em>The Odin Project </em>
                      while also pursuing a Master's Degree in Information Science{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to ="about-me">
              <div className="card">
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon">
                      <i className="fa fa-user-circle">
                        <PersonIcon sx={{ fontSize: 100 }} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="content">
                    <h3>The Person</h3>
                    <p>
                      David enjoys giving back to his community and helping
                      others. His lifelong motto is{" "}
                      <strong>"lift as you climb"</strong>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="scroll-container">
          <h2>Tech Skills</h2>
          <div className="carousel-primary">
            <Tooltip title="javascript">
              <img src="./JavaScript.png" alt="javascript" height="90" />
            </Tooltip>
            <Tooltip title="react">
              <img src="./react.png" alt="react" height="90" />
            </Tooltip>
            <Tooltip title="HTML">
              <img src="./HTML5.png" alt="HTML" height="90" />
            </Tooltip>
            <Tooltip title="CSS">
              <img src="./CSS3.png" alt="CSS" height="90" />
            </Tooltip>
            <Tooltip title="express">
              <img src="./Express.png" alt="express" height="90" />
            </Tooltip>
            <Tooltip title="git">
              <img src="./Git.png" alt="git" height="90" />
            </Tooltip>
            <Tooltip title="Material UI">
              <img src="./Material UI.png" alt="Material UI" height="90" />
            </Tooltip>
            <Tooltip title="node.js">
              <img src="./Node.js.png" alt="nodejs" height="90" />
            </Tooltip>
            <Tooltip title="NPM">
              <img src="./NPM.png" alt="NPM" height="90" />
            </Tooltip>
            <Tooltip title="PostgresSql">
              <img src="./PostgresSQL.png" alt="postgresql" height="90" />
            </Tooltip>
            <Tooltip title="prisma">
              <img src="./prisma.png" alt="prisma" height="90" />
            </Tooltip>
            <Tooltip title="salesforce">
              <img src="./Salesforce.png" alt="salesforce" height="90" />
            </Tooltip>
            <Tooltip title="vite.js">
              <img src="./Vite.js.png" alt="vite" height="90" />
            </Tooltip>
            <Tooltip title="vscode">
              <img src="./vscode.png" alt="git" height="90" />
            </Tooltip>
          </div>
          <div className="carousel-primary carousel-secondary">
            <Tooltip title="javascript">
              <img src="./JavaScript.png" alt="javascript" height="90" />
            </Tooltip>
            <Tooltip title="react">
              <img src="./react.png" alt="react" height="90" />
            </Tooltip>
            <Tooltip title="HTML">
              <img src="./HTML5.png" alt="HTML" height="90" />
            </Tooltip>
            <Tooltip title="CSS">
              <img src="./CSS3.png" alt="CSS" height="90" />
            </Tooltip>
            <Tooltip title="express">
              <img src="./Express.png" alt="express" height="90" />
            </Tooltip>
            <Tooltip title="git">
              <img src="./Git.png" alt="git" height="90" />
            </Tooltip>
            <Tooltip title="Material UI">
              <img src="./Material UI.png" alt="Material UI" height="90" />
            </Tooltip>
            <Tooltip title="node.js">
              <img src="./Node.js.png" alt="nodejs" height="90" />
            </Tooltip>
            <Tooltip title="NPM">
              <img src="./NPM.png" alt="NPM" height="90" />
            </Tooltip>
            <Tooltip title="PostgresSql">
              <img src="./PostgresSQL.png" alt="postgresql" height="90" />
            </Tooltip>
            <Tooltip title="prisma">
              <img src="./prisma.png" alt="prisma" height="90" />
            </Tooltip>
            <Tooltip title="salesforce">
              <img src="./Salesforce.png" alt="salesforce" height="90" />
            </Tooltip>
            <Tooltip title="vite.js">
              <img src="./Vite.js.png" alt="vite" height="90" />
            </Tooltip>
            <Tooltip title="vscode">
              <img src="./vscode.png" alt="git" height="90" />
            </Tooltip>
          </div>
        </div>
        <div>
          <h2>Experiences</h2>
          <div>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus eros
              et nunc lorem rhoncus consectetur, maecenas cubilia. Rutrum
              nascetur turpis scelerisque; ante posuere cursus cras. Orci
              eleifend parturient, ultrices inceptos sit iaculis. Etiam auctor
              platea, tempor platea habitant diam. Scelerisque vestibulum quis
              ad scelerisque varius per torquent pulvinar. Fringilla mus ad
              suspendisse mollis nisi integer proin praesent. Pretium pretium
            </p>
            <p>
              luctus laoreet nibh tristique. Adipiscing condimentum non magnis
              facilisi felis efficitur tristique rhoncus. Nisi ut id mus
              ridiculus magna nam suscipit. Cursus posuere tellus metus ad per a
              potenti. Erat odio tristique sem hendrerit auctor litora? Hac
              efficitur nisl quis quam mattis proin quisque scelerisque. Vitae
              erat fringilla eros sodales odio libero hendrerit potenti.
              Penatibus est rhoncus elementum; litora mi integer porttitor?
              Tellus iaculis lacinia ultricies augue egestas mattis placerat
              nec. Ut cursus ad posuere mi fusce elit vehicula. Dignissim
              lacinia tortor semper vel lacinia ex sed at.
            </p>
          </div>
        </div>
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
          <pre style={{ background: "rgb(250, 250, 250);", direction: "ltr" }}>
            <code>const [background, setBackground] = useState(null);</code>
            <code>{codeBlock1}</code>
            <code>{codeBlock2}</code>
          </pre>
        </div>
        <hr style={{ height: "2px", width: "100%" }} />
        <div>
          <p>
            <em>Sample</em>
          </p>
          <pre>
            <code>{codeBlock3}</code>
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

//add glassmorphism for experiences
//make light/dark mode functional
//add coloring for the code blocks
