"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Call.module.css";

const Call: React.FC = () => {
  const phoneNumber = "919494573777"; 

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <div className={styles.callWrapper}>
      <button className={styles.callButton} onClick={handleCall}>
        <FaPhoneAlt />
      </button>
    </div>
  );
};

export default Call;
