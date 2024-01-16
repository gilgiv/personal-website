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
            <h5>
              <i className="icons-class fa-solid fa-square-phone"></i>
              052-8875550
            </h5>
            <h5>
              <i className="icons-class fa-solid fa-square-envelope"></i>
              gilgiv@gmail.com
            </h5>
            <h5>
              <i class="icons-class fa-brands fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/gili-givoni-48171530/"
                target="_blank"
              >
                My linkedin
              </a>
            </h5>
          </div>
        </div>
        <button
          onClick={() => window.open("./docs/english cv.pdf")}
          className="btn btn-outline-primary openCV-btn"
        >
          Open my CV
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./images/gili_main_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
