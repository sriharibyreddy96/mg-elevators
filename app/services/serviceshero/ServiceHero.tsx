"use client";
import React from "react";
import styles from "./ServiceHero.module.css";
import Image from "next/image";
import withBasePath from "../../utils/withBasePath";

const ServiceHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.background}>
        <Image
          src={withBasePath("/assets/services/serviceshero.jpg")}
          alt="Services Background"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>Services</h1>
        <p className={styles.subtext}>
          At MG Elevator Services, we specialize in providing safe, reliable, and modern elevator solutions for every need. From home lifts to apartment, hospital, and commercial elevators, we design and install systems tailored to ensure comfort, safety, and efficiency.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
