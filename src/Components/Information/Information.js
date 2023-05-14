import "./Information.css";
import logo from "../../assets/logo192.png";

function Information() {
  return (
    <>
      <div className="about-container">
        <div className="about-text">
          <p className="about-title">About Me</p>
          <p className="information-content">
            I am a senior student at Selcuk University. My field is Computer
            Engineering. My specialization is web and mobile development.
            Although I am interested in other subfields of Computer Engineering
            such as Deep Learning and Data Mining those are my passions. I would
            like to develop my skills with by developing personal projects and
            by contributing ongoing projects.
          </p>
        </div>
      </div>
      <div className="cards">
      <div className="row">
          <div className="info-card">
            <img src={logo} className="info-image" />
            <div className="info-content">
              <p className="info-title">School</p>
              <p className="info-text">
                I am still a student at Selcuk University. While continuing my
                education I am developing personal projects. Also I am one of
                the founders of RISE Space community
              </p>
            </div>
          </div>
          <div className="info-card">
            <img src={logo} className="info-image" />
            <div className="info-content">
              <p className="info-title">School</p>
              <p className="info-text">
                I am still a student at Selcuk University. While continuing my
                education I am developing personal projects. Also I am one of
                the founders of RISE Space community
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="info-card">
            <img src={logo} className="info-image" />
            <div className="info-content">
              <p className="info-title">School</p>
              <p className="info-text">
                I am still a student at Selcuk University. While continuing my
                education I am developing personal projects. Also I am one of
                the founders of RISE Space community
              </p>
            </div>
          </div>
          <div className="info-card">
            <img src={logo} className="info-image" />
            <div className="info-content">
              <p className="info-title">School</p>
              <p className="info-text">
                I am still a student at Selcuk University. While continuing my
                education I am developing personal projects. Also I am one of
                the founders of RISE Space community
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
