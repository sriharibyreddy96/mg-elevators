"use client";
import styles from "./Aboutus.module.css";
import Image from "next/image";

export default function Aboutus() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Left Side - Image */}
        <div className={styles.left}>
          <Image
            src="./assets/about/About_Background.png"
            alt="MG Elevators"
            width={600}
            height={500}
            className={styles.mainImage}
          />
        </div>

        {/* Right Side - Content */}
        <div className={styles.right}>
          <h2 className={styles.heading}>About MG Elevators</h2>
          <p className={styles.description}>
            At <strong>MG Elevators</strong>, we are committed to providing
            safe, reliable, and innovative elevator solutions for residential,
            commercial, and hospital use. With a focus on modern technology and
            customer satisfaction, we deliver elevators that combine efficiency,
            style, and durability. Our dedicated team ensures each installation
            meets international safety standards while offering a smooth and
            comfortable experience.
          </p>

          {/* Founder Section */}
          <div className={styles.founder}>
            <Image
              src="./assets/about/Founder.jpg"
              alt="Founder"
              width={80}
              height={80}
              className={styles.founderImage}
            />
            <p className={styles.founderName}>MG Elevators – Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
