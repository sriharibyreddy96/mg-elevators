"use client";
import React from "react";
import Image from "next/image";
import styles from "./Choosesus.module.css";
// import image1 from './../../../../public/assets/background/Elevator_Background_1.jpeg'

const cards = [
  {
    id: 1,
    title: "Unmatched Safety",
    desc: "We ensure world-class safety standards with advanced sensors and protection systems.",
    image: "./assets/home/Choose_MGElevators/Safety.png",
  },
  {
    id: 2,
    title: "Smart Technology",
    desc: "Equipped with intelligent control systems for a smooth, modern elevator experience.",
    image: "./assets/home/Choose_MGElevators/SmartTech.png",

  },
  {
    id: 3,
    title: "Energy Efficient",
    desc: "Eco-friendly designs that reduce power consumption and save costs long-term.",
    image: "./assets/home/Choose_MGElevators/Energy.png",

  },
  {
    id: 4,
    title: "Customizable Designs",
    desc: "Elevators tailored to suit apartments, offices, malls, and hospitals.",
    image: "./assets/home/Choose_MGElevators/Customize.png",
  },
  {
    id: 5,
    title: "Elegant Interiors",
    desc: "Stylish cabin finishes with modern aesthetics for a premium ride.",
    image: "./assets/home/Choose_MGElevators/Interios.png",
  },
  {
    id: 6,
    title: "Reliable Support",
    desc: "24/7 maintenance and quick service response to keep elevators running.",
    image: "./assets/home/Choose_MGElevators/Support.png",
  },
];

const ChooseUs: React.FC = () => {
  return (
    <section className={styles.chooseUsSection}>
      <h2 className={styles.heading}>Why Choose MG Elevators</h2>
      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <Image
              src={card.image}
              alt={card.title}
              fill
              className={styles.cardImage}
            />
            <div className={styles.overlay}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
            <span className={styles.border}></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
