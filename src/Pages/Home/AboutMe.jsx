export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          className="rounded img-thumbnail"
          src="./images/gili_small.jpg"
          alt="AboutMeImage"
        />
      </div>
      <div className="about--section--content--box">
        <div className="about--section--content">
          <h2 className="about--section--heading">About Me</h2>
          <p className="about--section--description">
            Hi, I'm gili.
            <br />
            <br />
            A Full stack developer with a BA degree in computer science.
            <br />
            Extensive experience in developing softwares and applications,
            mostly in c# (.net framework) on Desktop and Web applications.
            <br />
            <br />
            Experience in developing and writing quality code using client-side
            and server-side technological tools.
            <br />
            <br />
            Over 15 years in the software industry, including several years as
            QA (manual and automatic) and as a development team leader.
            <br />
            <br />
            Independent learning of new technologies, ability to identify
            problems and adapt technological solutions, high motivation and
            excellent human relations.
            <br />
            <br />
            <blockquote >
                "חיוך לא עולה כסף אבל שווה זהב"
            </blockquote>
          </p>
        </div>
      </div>
    </section>
  );
}
