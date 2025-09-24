import React from "react";
import styles from "./Partners.module.css";
import Image from "next/image";

const partnerLogos = [
  "/assets/Partners/Partners1.jpg",
  "/assets/Partners/Partners2.jpg",
  "/assets/Partners/Partners3.jpg",
  "/assets/Partners/Partners4.jpg",
  "/assets/Partners/Partners5.jpg",
  "/assets/Partners/Partners6.jpg",
  "/assets/Partners/Partners7.jpg",
  "/assets/Partners/Partners8.jpg",
  "/assets/Partners/Partners9.jpg",
  "/assets/Partners/Partners10.jpg",
  "/assets/Partners/Partners11.jpg",
  "/assets/Partners/Partners12.jpg",
  "/assets/Partners/Partners13.jpg",
  "/assets/Partners/Partners14.jpg",
];

export default function Partners() {
  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.heading}>OUR PARTNERS</h2>
      <div className={styles.grid}>
        {partnerLogos.map((logo, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={logo}
              alt={`Partner ${index + 1}`}
              width={160}
              height={90}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
