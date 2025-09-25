"use client";
import React from "react";
import styles from "./Hero.module.css";
import withBasePath from "../utils/withBasePath"; // ✅ import utility

const Hero: React.FC = () => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${withBasePath("./assets/background/Elevator_Background_3.jpg")})`,
      }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>MG Elevators</h1>
        <p className={styles.subtitle}>
          Elevating Comfort, Safety & Innovation for Homes, Apartments, and Hospitals
        </p>
      </div>
    </section>
  );
};

export default Hero;
