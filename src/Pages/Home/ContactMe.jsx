export default function ContactMe() {
  return (
    <section id="ContactMe" className="contact--section">
      <div>
        <p className="sub--title">Get in touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
          explicabo.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First name: </span>
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
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email: </span>
            <input
              className="contact--input text-md"
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone number" className="contact--label">
            <span className="text-md">Phone number: </span>
            <input
              className="contact--input text-md"
              type="text"
              name="phone number"
              id="phone number"
            />
          </label>
        </div>
        <label htmlFor="choose topic" className="contact--label">
          <span className="text-md">Choose a topic: </span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select one...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message: </span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
