"use client";

import React from "react";
import styles from "./CustomDesign.module.css";

const CustomDesign: React.FC = () => {
  const handleDownload = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const link = document.createElement("a");
    link.href = `${basePath}/assets/pdf/Broucher.pdf`; // ✅ Uses base path dynamically
    link.download = "MG-Elevators-Brochure.pdf";
    link.target = "_blank"; // opens in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.customDesignSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          OUR MAIN GOAL: DESIGN ELEVATORS AS PER CUSTOMER CHOICE
        </h2>

        <p className={styles.description}>
          At the heart of our elevator solutions lies one simple promise —{" "}
          <strong>your vision, our design</strong>. Whether you’re seeking a modern,
          luxurious, or uniquely branded elevator, our expert team works
          hand-in-hand with you to craft a custom experience that reflects your
          exact needs and style.
        </p>

        <p className={styles.description}>
          From materials and finishes to lighting and layout, we empower you to
          make design decisions that matter. Elevate your space with a design
          that’s distinctly yours.
        </p>

        <button onClick={handleDownload} className={styles.ctaButton}>
          <span className={styles.glowBorder}></span>
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default CustomDesign;
