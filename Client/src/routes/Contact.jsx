import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Contact() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.success) {
          setError(null);
          setOpen(true);
          e.target.reset();
        } else {
          setError(data.error);
          setOpen(true);
        }
      }
    } catch (error) {
      setError(error);
      setOpen(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div id="contact-form">
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              id="message"
              placeholder="thoughts..."
            ></textarea>
          </div>
          <button type="submit">{loading ? "Loading..." : "Submit"}</button>
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            {error ? (
              <Alert   severity="error"
              onClose={handleClose}
              variant="filled"
              sx={{width:'100%'}}>
                {error}
              </Alert>
            ) : (
              <Alert
                severity="success"
                onClose={handleClose}
                variant="filled"
                sx={{width:'100%'}}
              >
                {" "}
                Success, your message was sent!
              </Alert>
            )}
          </Snackbar>
        </form>
      </div>
      <div>
        <ArrowDownwardIcon
          className="arrow"
          sx={{ fontSize: "150px", color: "red" }}
        />
        <a href="/resume.pdf" download="David Bottenberg's Resume">
          <button>Download my Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
