"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Side */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src="./assets/logo/Logo2.png" alt="MG Elevators Logo" width={120} height={40} />
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/share/1BfNWxKj5j/" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/mg.elevators?igsh=MTl6dmIwbHI3YmdzNg==" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle */}
        <div className={styles.middle}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul>
            <li>
              <Link href="/" className={styles.contactBtn}>Home</Link>
              {/* <a href="">Home</a> */}
            </li>
            <li>
              <Link href="/about" className={styles.contactBtn}>About</Link>
              {/* <a href="#">About Us</a> */}
            </li>
            <li>
              <Link href="/services" className={styles.contactBtn}>Services</Link>
              {/* <a href="#">Services</a> */}
            </li>
            <li>
              <Link href="/products" className={styles.contactBtn}>Products</Link>
              {/* <a href="#">Products</a> */}
            </li>
            <li>
              <Link href="/gallery" className={styles.contactBtn}>Gallery</Link>
              {/* <a href="#">Products</a> */}
            </li>
            <li>
              <Link href="/contact" className={styles.contactBtn}>Contact Us</Link>
              {/* <a href="#">Contact</a> */}
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <h3 className={styles.heading}>Contact Us</h3>
          <p>Email: mgelevators.hyd@gmail.com</p>
          <p>Email: support@mgelevators.com</p>
          <p>Phone: +91 9494573777</p>
          <p>Phone: +91 8885551399</p>
          <p>
            Address: Flat No. 402, SRI SAI SRINIVASAM, PLOT NO 251, Jagan
            Studios Rd, near NEO GEETHANJALI SCHOOL, Kakatiya Hills, Vasanth
            Nagar Colony, Pragathi Nagar, NIZAMPET, Hyderabad, Telangana 500090
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <hr className={styles.separator} />
        <p>© {new Date().getFullYear()} MG Elevators. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
