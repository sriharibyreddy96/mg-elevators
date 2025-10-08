"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaAngleDown, FaAngleRight } from "react-icons/fa";
import withBasePath from "../utils/withBasePath";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav" ref={menuRef}>
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src={withBasePath("./assets/logo/Logo14.png")}
              alt="MG Elevators Logo"
              width={120}
              height={50}
              priority
              loading="eager"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>

          {/* Products Dropdown */}
          <li className="dropdown">
            <Link
              href="#"
              // onClick={handleLinkClick}
              className="dropdown-toggle"
            >
              Products <FaAngleDown className="icon" />
            </Link>

            <ul className="dropdown-menu">
              <li className="has-sub">
                <span>
                  Residential Elevators <FaAngleRight className="icon" />
                </span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/products#auto-door" onClick={handleLinkClick}>
                      Auto Door
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products#manual-door"
                      onClick={handleLinkClick}
                    >
                      Manual Door
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/products#hydraulic-elevators"
                  onClick={handleLinkClick}
                >
                  Hydraulic Elevators
                </Link>
              </li>

              <li className="has-sub">
                <span>
                  Home Elevators <FaAngleRight className="icon" />
                </span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/products#mrl-lifts" onClick={handleLinkClick}>
                      MRL Lifts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#belt-lifts" onClick={handleLinkClick}>
                      Belt Lifts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products#traction-lifts"
                      onClick={handleLinkClick}
                    >
                      Traction Lifts
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/products#goods-elevators"
                  onClick={handleLinkClick}
                >
                  Goods Elevators
                </Link>
              </li>
              <li>
                <Link
                  href="/products#structure-elevators"
                  onClick={handleLinkClick}
                >
                  Structure Elevators
                </Link>
              </li>
              <li>
                <Link
                  href="/products#commercial-elevators"
                  onClick={handleLinkClick}
                >
                  Commercial Elevators
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/services" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={handleLinkClick}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {mounted ? (
            menuOpen ? (
              <FaTimes size={28} color="white" />
            ) : (
              <FaBars size={28} color="white" />
            )
          ) : (
            <span style={{ width: 28, height: 28 }} />
          )}
        </div>
      </nav>
    </header>
  );
}
