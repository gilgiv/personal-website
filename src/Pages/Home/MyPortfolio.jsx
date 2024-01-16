import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section id="MyPortfolio" className="portfolio--section">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My portfolio</p>
          <h2 className="section--heading">Some of my projects</h2>
        </div>
        <div>
          <button
            onClick={() => window.open("https://github.com/gilgiv")}
            className="btn btn-github"
          >
            <i className="fa-brands fa-github fa-lg"></i>Visit my GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="projectImage" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <i className="fa-brands fa-github"></i>
                {item.link}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
