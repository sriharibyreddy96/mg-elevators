import React from "react";
import styles from "./Clients.module.css";
import Image from "next/image";

const clientLogos = [
  "/assets/Clients/Client1.jpg",
  "/assets/Clients/Client2.jpg",
  "/assets/Clients/Client3.jpg",
  "/assets/Clients/Client4.jpg",
  "/assets/Clients/Client5.jpg",
  "/assets/Clients/Client6.jpg",
  "/assets/Clients/Client7.jpg",
  "/assets/Clients/Client8.jpg",
  "/assets/Clients/Client9.jpg",
  "/assets/Clients/Client10.jpg",
  "/assets/Clients/Client11.jpg",
];

export default function Clients() {
  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.heading}>OUR CLIENTS</h2>
      <div className={styles.grid}>
        {clientLogos.map((logo, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={logo}
              alt={`Client ${index + 1}`}
              width={150}
              height={80}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
