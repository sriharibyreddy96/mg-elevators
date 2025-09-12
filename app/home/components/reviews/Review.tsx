import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";

interface ReviewProps {
  name: string;
  image: string;
  text: string;
}

const Review: React.FC<ReviewProps> = ({ name, image, text }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewImageWrapper}>
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className={styles.reviewImage}
        />
      </div>
      <h3 className={styles.reviewName}>{name}</h3>
      <p className={styles.reviewText}>{text}</p>
    </div>
  );
};

export default Review;
