import React from "react";
import styles from "./Benefits.module.css";
import Benefit from "./Benefit";

const benefitsData = [
  {
    heading: "Smart & Safe Rides",
    description: "Our elevators are equipped with advanced sensors and safety features that ensure smooth, reliable, and accident-free rides for all passengers.",
  },
  {
    heading: "Energy Efficient Design",
    description: "With intelligent power-saving technology, MG Elevators consume less electricity while delivering top performance, reducing both cost and carbon footprint.",
  },
  {
    heading: "Modern & User-Friendly Interface",
    description: "From touch-enabled panels to mobile app integration, our elevators are built for today’s digital lifestyle, making operation simple and convenient.",
  },
  {
    heading: "Faster & Smoother Travel",
    description: "Equipped with high-performance motors and control systems, our elevators guarantee quick rides with minimal waiting time and zero jerks.",
  },
  {
    heading: "Customizable for Every Building",
    description: "Whether it’s apartments, offices, hospitals, or malls, MG Elevators can be tailored in design, capacity, and speed to match unique requirements.",
  },
  {
    heading: "Remote Monitoring & Maintenance",
    description: "Smart technology enables real-time monitoring, quick fault detection, and predictive maintenance to ensure uninterrupted performance.",
  },
  {
    heading: "Elegant & Modern Design",
    description: "With stylish cabins, premium finishes, and customizable colors, MG Elevators add elegance to your building’s interior.",
  },
  {
    heading: "Long-Term Reliability",
    description: "Built with world-class engineering and durable components, MG Elevators ensure long-lasting performance and reduced maintenance costs.",
  },
];


export default function Benefits() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Smart Benefits of MG Elevators</h2>
      <div className={styles.grid}>
        {benefitsData.map((benefit, idx) => (
          <Benefit key={idx} heading={benefit.heading} description={benefit.description} />
        ))}
      </div>
    </section>
  );
}
