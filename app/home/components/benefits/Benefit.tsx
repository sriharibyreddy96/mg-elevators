import React from "react";
import styles from "./Benefits.module.css";

interface BenefitProps {
  heading: string;
  description: string;
}

export default function Benefit({ heading, description }: BenefitProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeading}>{heading}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
