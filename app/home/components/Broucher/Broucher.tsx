"use client";

import React from "react";
import styles from "./Broucher.module.css";
import { FaFileDownload } from "react-icons/fa";
import withBasePath from "../../../utils/withBasePath"; // ✅ helper import

const Broucher: React.FC = () => {
  const handleDownload = () => {
    const pdfPath = withBasePath("./assets/pdf/Broucher.pdf"); // ✅ safer with basePath
    const link = document.createElement("a");
    link.href = pdfPath;
    link.target = "_blank"; // open in new tab
    link.download = "MG-Elevators-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.downloadBtn} onClick={handleDownload}>
        <span className={styles.icon}>
          <FaFileDownload />
        </span>
        <span className={styles.text}>Download Brochure</span>
        <span className={styles.borderAnimation}></span>
      </button>
    </div>
  );
};

export default Broucher;
