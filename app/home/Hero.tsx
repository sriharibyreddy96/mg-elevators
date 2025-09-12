import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
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
