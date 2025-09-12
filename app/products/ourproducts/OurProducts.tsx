"use client";
import React from "react";
import styles from "./OurProducts.module.css";
import Link from "next/link";
import Image from "next/image";

interface Product {
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    title: "Passenger (Auto and Manual)",
    description:
      "Our passenger elevators, available in both automatic and manual models, are designed for smooth, safe, and comfortable vertical transportation. Perfect for residential, commercial, and corporate buildings.",
    image: "./assets/products/home1.jpg",
  },
  {
    title: "Home Elevators",
    description:
      "Home elevators add elegance and convenience to your house. Built with cutting-edge technology, these lifts are space-efficient and provide unmatched comfort for everyday living.",
    image: "./assets/products/home2.jpg",
  },
  {
    title: "Hospital Elevators",
    description:
      "Hospital elevators are engineered with precision for patient safety and quick mobility. Spacious cabins and smooth operation ensure seamless transportation of stretchers and medical equipment.",
    image: "./assets/products/home3.jpg",
  },
  {
    title: "Hydraulic Elevators",
    description:
      "Hydraulic elevators are known for their high load capacity and efficiency. Ideal for low to mid-rise buildings, they deliver reliable performance with minimal maintenance requirements.",
    image: "./assets/products/home4.jpg",
  },
  {
    title: "Goods Elevators",
    description:
      "Built to carry heavy loads, our goods elevators are rugged and durable. Designed for warehouses, factories, and industries, they ensure safe and reliable movement of goods.",
    image: "./assets/products/home5.jpg",
  },
  {
    title: "Flame Proof Elevators",
    description:
      "Our flame-proof elevators are designed for hazardous environments. They meet strict safety standards, ensuring secure and uninterrupted operations in sensitive areas.",
    image: "./assets/products/home6.jpg",
  },
  {
    title: "Car Elevators",
    description:
      "Car elevators provide efficient parking solutions for luxury apartments and commercial complexes. They maximize space utilization while ensuring the safe handling of vehicles.",
    image: "./assets/products/home7.jpg",
  },
  {
    title: "Capsule Elevators",
    description:
      "Capsule elevators enhance the architectural beauty of buildings with their panoramic glass design. They combine aesthetics with functionality, offering a luxurious riding experience.",
    image: "./assets/products/home8.jpg",
  },
];

export default function OurProducts() {
  return (
    <section className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>Our Products</h2>
      {products.map((product, index) => (
        <div
          key={index}
          className={`${styles.productCard} ${
            index % 2 === 0 ? styles.leftImage : styles.rightImage
          }`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              quality={90}
            />
          </div>
          <div className={styles.content}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
