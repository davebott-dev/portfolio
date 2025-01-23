function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>

      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">email: </label>
        <input type="email" name="email" id="email" />

        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          placeholder="thoughts..."
        ></textarea>
        <button>Submit</button>
      </form>

      <a href="/Resume.pdf" download="resume"><button type="button">Resume</button></a>
    </div>
  );
}

export default Contact;
