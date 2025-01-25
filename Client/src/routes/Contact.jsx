function Contact() {
  //set up a handle submit form that sends the data to the backend
  return (
    <div id="contact-form">
      <div>
        <h1>Contact Me</h1>
        <form>
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
          <button>Submit</button>
        </form>
      </div>
      <div>
        <a href="/resume.pdf" download="David Bottenberg's Resume">
          <img src="resume.jpg" alt="first page of my resume" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
