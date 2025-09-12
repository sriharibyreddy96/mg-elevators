"use client";
import React from "react";
import styles from "./Emergency.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Emergency: React.FC = () => {
  return (
    <section className={styles.emergencySection}>
      <div className={styles.emergencyCard}>
        <h2 className={styles.heading}>24/7 Sales & Support</h2>
        <p className={styles.description}>
          We’re here round the clock to assist you with sales inquiries and
          technical support. Your satisfaction is our priority!
        </p>

        <div className={styles.buttonGroup}>
          <a href="tel:+919494573777" className={styles.callButton}>
            <FaPhoneAlt /> Call Now
          </a>
          <a
            href="https://wa.me/919494573777"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
