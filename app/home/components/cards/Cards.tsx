import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

const cardData = [
  {
    tag: "Home",
    image: "./assets/home/HomeCard.jpg",
    description: "Modern home elevators to boost convenience and style.",
  },
  {
    tag: "Apartments",
    image:
       "./assets/home/ApartmentCard.jpeg",
    description: "Smart elevators designed for apartment living spaces.",
  },
  {
    tag: "Hospitals",
    image:
      "./assets/home/HospitalCard.jpeg",
    description:
      "Reliable elevators designed for hospital safety & accessibility.",
  },
  {
    tag: "Commercials",
    image:
      "./assets/home/CommercialCard.jpg",
    description: "High performance elevators for commercial buildings.",
  },
];

export default function Cards() {
  return (
    <section className={styles.cardsSection}>
      {cardData.map(({ tag, image, description }) => (
        <Card key={tag} tag={tag} image={image} description={description} />
      ))}
    </section>
  );
}
