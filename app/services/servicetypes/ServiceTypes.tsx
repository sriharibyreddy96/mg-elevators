"use client";
import React from "react";
import styles from "./ServiceTypes.module.css";
import Image from "next/image";
import {
  FaHeadset,
  FaTools,
  FaCogs,
  FaDraftingCompass,
  FaSyncAlt,
  FaWrench,
} from "react-icons/fa";

// Define card data
const services = [
  {
    title: "Customer Support & Repairs",
    description:
      "We provide 24/7 customer support and quick repair solutions to keep your elevators running smoothly.",
    icon: <FaHeadset />,
    image: "/assets/services/Customer_Support.png",
  },
  {
    title: "Maintenance",
    description:
      "Regular maintenance services to ensure reliability, safety, and long-lasting performance of your elevators.",
    icon: <FaTools />,
    image: "/assets/services/Maintanance.png",
  },
  {
    title: "Services",
    description:
      "Comprehensive elevator services including inspections, upgrades, and on-demand support.",
    icon: <FaCogs />,
    image: "/assets/services/Services.png",
  },
  {
    title: "Engineering Support",
    description:
      "Expert engineering support for custom elevator solutions and complex project requirements.",
    icon: <FaDraftingCompass />,
    image: "/assets/services/Engineering_Support.png",
  },
  {
    title: "Replacement / Modernization",
    description:
      "Upgrade or replace existing elevators with modern, energy-efficient systems for better performance.",
    icon: <FaSyncAlt />,
    image: "/assets/services/Replacement.png",
  },
  {
    title: "Technical Assistance",
    description:
      "Our experts are ready to provide technical assistance to resolve issues and improve efficiency.",
    icon: <FaWrench />,
    image: "/assets/services/Technical_Assistance.png",
  },
];

const ServiceTypes: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            {/* Background Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.bgImage}
                priority
              />
              <div className={styles.overlay}></div>
            </div>

            {/* Content */}
            <div className={styles.content}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTypes;
