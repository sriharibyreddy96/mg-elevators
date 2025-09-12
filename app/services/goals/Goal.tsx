"use client";
import React from "react";
import styles from "./Goal.module.css";
import { FaHeadset, FaCogs, FaBuilding, FaTools } from "react-icons/fa";

const goals = [
  {
    icon: <FaHeadset />,
    title: "24/7 Sales & Support",
    description: "Always available when you need us.",
  },
  {
    icon: <FaCogs />,
    title: "Advanced Technology",
    description: "Latest models with energy-efficient and smooth operation.",
  },
  {
    icon: <FaBuilding />,
    title: "Customized Solutions",
    description:
      "Elevators designed for residential, commercial, and medical spaces.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Service",
    description: "Regular check-ups and emergency support for worry-free operation.",
  },
];

const Goal: React.FC = () => {
  return (
    <section className={styles.goalSection}>
      <h2 className={styles.heading}>Our Main Goal</h2>
      <div className={styles.cardContainer}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{goal.icon}</div>
            <h3 className={styles.cardTitle}>{goal.title}</h3>
            <p className={styles.cardDescription}>{goal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goal;
