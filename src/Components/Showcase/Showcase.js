import React from "react";
import "./Showcase.scss";
import image from "../../assets/app.jpg";

function Card({ image, title, content }) {
  return (
    <div className="link-card">
      <img src={image} className="card-image" alt="card-image" />
      <div className="title-container">
        <p className="card-title">{title}</p>
      </div>
      <p className="card-content">{content}</p>
    </div>
  );
}

function CardRow({ title, cards }) {
  return (
    <div className="card-row">
      <div className="row-header">
        <p className="row-header-title">{title}</p>
      </div>
      <div className="showcase-cards">
        {cards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
      <hr class="solid" />
    </div>
  );
}

const cards = [
  <Card
    image={image}
    title={"Title"}
    content={"An app for landlords to control their rented properties"}
  />,
  <Card
    image={image}
    title={"Title"}
    content={"An app for landlords to control their rented properties"}
  />,
  <Card
    image={image}
    title={"Title"}
    content={"An app for landlords to control their rented properties"}
  />,
];

function Showcase() {
  return (
    <div className="showcase">
      <CardRow title={"Projects"} cards={cards} />
      <CardRow title={"Projects"} cards={cards} />
    </div>
  );
}

export default Showcase;
