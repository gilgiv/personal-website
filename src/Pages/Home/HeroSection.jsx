export default function HeroSection() {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gili</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Senior</span> <br />
            Software Developer
          </h1>
          <div className="hero--section--description">
            <h4>
              <i className="fa-solid fa-square-phone"></i>
              052-8875550
            </h4>
            <h4>
              <i className="fa-solid fa-square-envelope"></i>
              gilgiv@gmail.com
            </h4>
          </div>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./images/gili_main_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
