"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../../public/assets/logo/Logo2.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ✅ ensures icons match client rendering
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={50}
              priority
              loading="eager"
            />
          </Link>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Render icons only after mount to avoid mismatch */}
        {/* <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {mounted && (menuOpen ? <FaTimes size={28} color="white" /> : <FaBars size={28} color="white" />)}
        </div> */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {mounted ? (
            menuOpen ? (
              <FaTimes size={28} color="white" />
            ) : (
              <FaBars size={28} color="white" />
            )
          ) : (
            <span style={{ width: 28, height: 28 }} /> // placeholder div for consistent SSR
          )}
        </div>
      </nav>
    </header>
  );
}
