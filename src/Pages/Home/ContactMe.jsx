export default function ContactMe() {
  return (
    <section id="ContactMe" className="contact--section">
      <div>
        <p className="sub--title">Get in touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out! Whether you're interested in my services, want
          to collaborate, or simply want to say hello, I'd love to hear from
          you.
        </p>
      </div>
      <form
        action="mailto:gilgiv@gmail.com"
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First name: * </span>
            <input
              className="contact--input text-md"
              type="text"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last name: </span>
            <input
              className="contact--input text-md"
              type="text"
              name="last-name"
              id="last-name"
            />
          </label>
          <label htmlFor="phone" className="contact--label">
            <span className="text-md">Phone: </span>
            <input
              className="contact--input text-md"
              type="text"
              name="phone"
              id="phone"
            />
          </label>
          <label htmlFor="subject" className="contact--label">
            <span className="text-md">Subject: * </span>
            <input
              className="contact--input text-md"
              type="text"
              name="subject"
              id="subject"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message: </span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="body"
            rows="5"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
