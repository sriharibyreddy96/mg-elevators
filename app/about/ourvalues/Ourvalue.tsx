"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Ourvalues.module.css";

type Props = {
  title: string;
  points: string[];
  image: string;
  overlay: string; // rgba(...) string to control opacity/color
};

const OurValue: React.FC<Props> = ({ title, points, image, overlay }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className={styles.bgImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 560px"
        />
        <div
          className={styles.overlay}
          style={{ backgroundColor: overlay }}
          aria-hidden="true"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>

        <ul className={styles.list}>
          {points.map((p, i) => (
            <li className={styles.listItem} key={i}>
              <FiArrowRight className={styles.arrow} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default OurValue;
