"use client";
import React from "react";
import styles from "./Partners.module.css";
import Image from "next/image";
import withBasePath from "../../../utils/withBasePath"; // ✅ import utility

const partnerLogos = [
  withBasePath("/assets/Partners/Partners1.jpg"),
  withBasePath("/assets/Partners/Partners2.jpg"),
  withBasePath("/assets/Partners/Partners3.jpg"),
  withBasePath("/assets/Partners/Partners4.jpg"),
  withBasePath("/assets/Partners/Partners5.jpg"),
  withBasePath("/assets/Partners/Partners6.jpg"),
  withBasePath("/assets/Partners/Partners7.jpg"),
  withBasePath("/assets/Partners/Partners8.jpg"),
  withBasePath("/assets/Partners/Partners9.jpg"),
  withBasePath("/assets/Partners/Partners10.jpg"),
  withBasePath("/assets/Partners/Partners11.jpg"),
  withBasePath("/assets/Partners/Partners12.jpg"),
  withBasePath("/assets/Partners/Partners13.jpg"),
  withBasePath("/assets/Partners/Partners14.jpg"),
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
