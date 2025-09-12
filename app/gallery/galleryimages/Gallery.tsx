"use client";
import React from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const sections = [
  {
    title: "Home Elevators",
    images: Array.from({ length: 10 }, (_, i) => `./assets/gallery/home/home${i + 1}.jpg`),
  },
  {
    title: "Office Elevators",
    images: Array.from({ length: 13 }, (_, i) => `./assets/gallery/office/office${i + 1}.jpeg`),
  },
  {
    title: "Hospital Elevators",
    images: Array.from({ length: 8 }, (_, i) => `./assets/gallery/hospital/hospital${i + 1}.jpeg`),
  },
  {
    title: "Hydraulic Elevators",
    images: Array.from({ length: 9 }, (_, i) => `./assets/gallery/hydraulic/hydraulic${i + 1}.jpeg`),
  },
  {
    title: "Additional Elevators",
    images: Array.from({ length: 4 }, (_, i) => `./assets/gallery/additional/additional${i + 1}.jpeg`),
  },
];

const Gallery: React.FC = () => {
  return (
    <section className={styles.section}>
      {sections.map((section, idx) => (
        <div key={idx} className={styles.category}>
          <h2 className={styles.heading}>{section.title}</h2>
          <div className={styles.grid}>
            {section.images.map((src, i) => (
              <div key={i} className={styles.card}>
                <Image
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                  className={styles.image}
                  width={400}
                  height={300}
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
