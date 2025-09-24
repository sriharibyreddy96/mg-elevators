"use client";
import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import withBasePath from "../../../utils/withBasePath"; // ✅ import utility

const cardData = [
  {
    tag: "Home",
    image: withBasePath("/assets/home/HomeCard.jpg"),
    description: "Modern home elevators to boost convenience and style.",
  },
  {
    tag: "Apartments",
    image: withBasePath("/assets/home/ApartmentCard.jpeg"),
    description: "Smart elevators designed for apartment living spaces.",
  },
  {
    tag: "Hospitals",
    image: withBasePath("/assets/home/HospitalCard.jpeg"),
    description: "Reliable elevators designed for hospital safety & accessibility.",
  },
  {
    tag: "Commercials",
    image: withBasePath("/assets/home/CommercialCard.jpg"),
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
