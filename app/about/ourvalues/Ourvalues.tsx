"use client";
import React from "react";
import styles from "./Ourvalues.module.css";
import OurValue from "./Ourvalue";
import withBasePath from "../../utils/withBasePath"; // ✅ import helper

// First four option groups based on your earlier choices
const VALUE_BLOCKS = [
  {
    title: "Safety, Reliability & Customer Commitment",
    points: [
      "Safety First – Passenger protection above all",
      "Reliability – Consistent uptime & smooth rides",
      "Customer Commitment – Long-term trust",
    ],
    image: withBasePath("./assets/background/Aboutus_Elevator2.jpeg"), // ✅ wrapped
    overlay: "rgba(65,105,225,0.55)", // #4169E1
  },
  {
    title: "Innovation, Smart Mobility & Sustainability",
    points: [
      "Innovation – Latest elevator tech",
      "Smart Mobility – Ready for smart buildings",
      "Sustainability – Energy-efficient systems",
    ],
    image: withBasePath("./assets/background/Aboutus_Elevator2.jpeg"),
    overlay: "rgba(65,105,225,0.55)", // #4169E1
  },
  {
    title: "Integrity, Ownership & Compassion",
    points: [
      "Integrity – Honest & transparent",
      "Ownership – Accountable end-to-end",
      "Compassion – Comfort & accessibility",
    ],
    image: withBasePath("./assets/background/Aboutus_Elevator2.jpeg"),
    overlay: "rgba(65,105,225,0.55)", // #4169E1
  },
  {
    title: "Excellence, Improvement & Service First",
    points: [
      "Excellence – Quality that lasts",
      "Continuous Improvement – Evolving tech",
      "Service First – Fast, reliable support",
    ],
    image: withBasePath("./assets/background/Aboutus_Elevator2.jpeg"),
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
              image={block.image}
              overlay={block.overlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
