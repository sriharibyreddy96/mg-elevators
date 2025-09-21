import React from "react";
import styles from "./Cards.module.css";
import Link from "next/link";

interface CardProps {
  tag: string;
  image: string;
  description: string;
}

export default function Card({ tag, image, description }: CardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.tag}>{tag}</span>
      <img src={image} alt={`${tag} elevator`} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
          <Link href="/contact" className={styles.contactBtn}>
                      Details
                    </Link>
        </button>
      </div>
    </div>
  );
}
