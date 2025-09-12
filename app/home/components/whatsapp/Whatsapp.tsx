"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Whatsapp.module.css";
import { FaWhatsapp, FaHeadset, FaUserTie } from "react-icons/fa";

export default function Whatsapp() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.whatsappWrapper} ref={menuRef}>
      <div className={styles.menu}>
        {open && (
          <div className={styles.menuContent}>
            <a
              href="https://wa.me/919494573777"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuItem}
            >
              <FaUserTie className={styles.menuIcon} />
              <span>Sales</span>
            </a>
            <hr className={styles.separator} />
            <a
              href="https://wa.me/918885551399"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuItem}
            >
              <FaHeadset className={styles.menuIcon} />
              <span>Support</span>
            </a>
          </div>
        )}
      </div>
      <button onClick={toggleMenu} className={styles.whatsappButton}>
        <FaWhatsapp className={styles.whatsappIcon} />
      </button>
    </div>
  );
}
