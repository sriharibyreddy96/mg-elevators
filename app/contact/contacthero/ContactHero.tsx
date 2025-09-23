"use client";
import React from "react";
import styles from "./ContactHero.module.css";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const ContactHero: React.FC = () => {
  const phoneNumber = "+919494573777"; // change number here

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.background}>
        <Image
          src="./assets/gallery/home/home1.jpg"
          alt="Contact Background"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subtext}>
          We’re here to assist you. Reach out via call or WhatsApp today.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.callBtn} onClick={handleCall}>
            <FiPhoneCall size={20} style={{ marginRight: "8px" }} />
            Call Now
          </button>
          <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
            <BsWhatsapp size={20} style={{ marginRight: "8px" }} />
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
