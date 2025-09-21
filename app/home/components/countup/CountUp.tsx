"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./CountUp.module.css";

const CountUpSection: React.FC = () => {
  const stats = [
    { id: 1, value: 15, suffix: "+", label: "Years of Experience" },
    { id: 2, value: 1450, suffix: "+", label: "Elevators Installed" },
    { id: 3, value: 2000, suffix: "+", label: "Satisfied Clients" },
    { id: 4, value: 2000, suffix: "+", label: "Services" },
  ];

  // Hook to detect visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // start animation when 30% visible
  });

  return (
    <section ref={ref} className={styles.container}>
      {stats.map((stat) => (
        <div key={stat.id} className={styles.card}>
          <h2 className={styles.number}>
            {inView ? (
              <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
            ) : (
              "0" + stat.suffix
            )}
          </h2>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default CountUpSection;
