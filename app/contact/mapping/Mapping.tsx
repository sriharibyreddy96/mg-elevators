"use client";
import React from "react";
import styles from "./Mapping.module.css";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Mapping: React.FC = () => {
  return (
    <section className={styles.mappingSection}>
      {/* Left side - Map */}
      <div className={styles.mapContainer}>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=MG+ELEVATORS,+Hyderabad,+Telangana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            id="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4690563332947!2d78.38872137498879!3d17.5328408833794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f22642a20f5%3A0x8a1a5784279cb56f!2sMG%20ELEVATORS!5e0!3m2!1sen!2sin!4v1757318996584!5m2!1sen!2sin"
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </div>

      {/* Right side - Info */}
      <div className={styles.infoCard}>
        <div className={styles.infoCardContent}>
          {/* Address */}
          <div className={styles.addressBox}>
            <h2>
              <FaMapMarkerAlt /> Office Address
            </h2>
            <p>MG ELEVATORS</p>
            <p>
              Flat No. 402, SRI SAI SRINIVASAM, PLOT NO 251, Jagan Studios Rd,
              near NEO GEETHANJALI SCHOOL, Kakatiya Hills, Vasanth Nagar Colony,
              Pragathi Nagar, NIZAMPET, Hyderabad, Telangana 500090
            </p>
          </div>

          {/* Business Hours */}
          <div className={styles.hoursBox}>
            <h2>
              <FaClock /> Business Hours
            </h2>
            <ul>
              <li>Mon - Fri: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapping;
