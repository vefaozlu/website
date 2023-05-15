import "./Information.scss";
import image from "../../assets/logo192.png";

function Information() {
  return (
    <>
      <div className="about">
        <p className="about-title">About Me</p>
        <p className="about-content">
          I am a senior student at Selcuk University. My field is Computer
          Engineering. My specialization is web and mobile development. Although
          I am interested in other subfields of Computer Engineering such as
          Deep Learning and Data Mining those are my passions. I would like to
          develop my skills with by developing personal projects and by
          contributing ongoing projects.
        </p>
      </div>
      <AboutCards cards={cards} />
    </>
  );
}

function AboutCards({ cards }) {
  return (
    <div className="about-cards">
      {cards.map((card, index) => (
        <div className={index} key={index}>
          {card}
        </div>
      ))}
    </div>
  );
}

function AboutCard({ image, title, content }) {
  return (
    <div className="about-card">
      <img src={image} className="card-image" />
      <div className="card-text">
        <div className="title-container">
          <p className="card-title">{title}</p>
        </div>
        <div className="content-container">
          <p className="card-content">{content}</p>
        </div>
      </div>
    </div>
  );
}

const cards = [
  <AboutCard
    image={image}
    title={"Title"}
    content={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante fermentum, posuere nunc vel, sodales erat. Nunc ligula mauris, ornare ac magna in, scelerisque pretium purus."
    }
  />,
  <AboutCard
    image={image}
    title={"Title"}
    content={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante fermentum, posuere nunc vel, sodales erat. Nunc ligula mauris, ornare ac magna in, scelerisque pretium purus."
    }
  />,
  <AboutCard
    image={image}
    title={"Title"}
    content={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante fermentum, posuere nunc vel, sodales erat. Nunc ligula mauris, ornare ac magna in, scelerisque pretium purus."
    }
  />,
  <AboutCard
    image={image}
    title={"Title"}
    content={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante fermentum, posuere nunc vel, sodales erat. Nunc ligula mauris, ornare ac magna in, scelerisque pretium purus."
    }
  />,
];

export default Information;
