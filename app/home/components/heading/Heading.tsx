import React from "react";
import styles from "./Heading.module.css";

export default function Heading() {
  return (
    <section className={styles.container}>
      <div className={styles.headingBox}>
        <h1 className={styles.heading}>Elevating Innovation with Technology</h1>
      </div>
    </section>
  );
}
