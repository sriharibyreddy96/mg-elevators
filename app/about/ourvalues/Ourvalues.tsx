"use client";
import React from "react";
import styles from "./Ourvalues.module.css";
import OurValue from "./Ourvalue";
import OurValuesImg1 from "../../../public/assets/background/Aboutus_Elevator2.jpeg"

// First four option groups based on your earlier choices
const VALUE_BLOCKS = [
  {
    title: "Safety, Reliability & Customer Commitment",
    points: [
      "Safety First – Passenger protection above all",
      "Reliability – Consistent uptime & smooth rides",
      "Customer Commitment – Long-term trust",
    ],
    image: OurValuesImg1, // replace with your path
    overlay: "rgba(65,105,225,0.55)", // #4169E1
  },
  {
    title: "Innovation, Smart Mobility & Sustainability",
    points: [
      "Innovation – Latest elevator tech",
      "Smart Mobility – Ready for smart buildings",
      "Sustainability – Energy-efficient systems",
    ],
    image: OurValuesImg1,
    overlay: "rgba(65,105,225,0.55)", // #4169E1
  },
  {
    title: "Integrity, Ownership & Compassion",
    points: [
      "Integrity – Honest & transparent",
      "Ownership – Accountable end-to-end",
      "Compassion – Comfort & accessibility",
    ],
    image: OurValuesImg1,
    overlay: "rgba(65,105,225,0.55)", // #4169E1
  },
  {
    title: "Excellence, Improvement & Service First",
    points: [
      "Excellence – Quality that lasts",
      "Continuous Improvement – Evolving tech",
      "Service First – Fast, reliable support",
    ],
    image: OurValuesImg1,
    overlay: "rgba(65,105,225,0.55)", // #4169E1
  },
];

const Ourvalues: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Values</h2>

        <div className={styles.grid}>
          {VALUE_BLOCKS.map((block, idx) => (
            <OurValue
              key={idx}
              title={block.title}
              points={block.points}
              image={block.image.src}
              overlay={block.overlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
