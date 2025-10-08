"use client";
import React from "react";
import styles from "./OurProducts.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";
import withBasePath from "../../utils/withBasePath";

interface SubProduct {
  title: string;
  description: string;
  image: string;
}

interface Product {
  title: string;
  subProducts?: SubProduct[];
  description?: string;
  image?: string;
}

const products: Product[] = [
  {
    title: "Residential Elevators",
    subProducts: [
      {
        title: "Auto Door",
        description:
          "Our auto-door residential elevators ensure modern convenience with smooth, automated operation and enhanced safety.",
        image: withBasePath("./assets/products/AutoDoor1.jpg"),
      },
      {
        title: "Manual Door",
        description:
          "Manual door elevators are cost-effective, reliable, and ideal for residential use, offering easy operation and durability.",
        image: withBasePath("./assets/products/ManualDoor.jpg"),
      },
    ],
  },
  {
    title: "Hydraulic Elevators",
    description:
      "Hydraulic elevators are built for durability and high load capacity, best suited for low to mid-rise buildings.",
    image: withBasePath("./assets/products/Hydraulic.jpg"),
  },
  {
    title: "Home Elevators",
    subProducts: [
      {
        title: "MRL Lifts",
        description:
          "Machine Room Less (MRL) lifts save space while providing efficient vertical transportation for modern homes.",
        image: withBasePath("./assets/products/MRL_Lift.jpg"),
      },
      {
        title: "Belt Lifts",
        description:
          "Belt-driven lifts are designed for silent operation and energy efficiency, enhancing residential comfort.",
        image: withBasePath("./assets/products/Belt_Lift.jpg"),
      },
      {
        title: "Traction Lifts",
        description:
          "Traction lifts deliver a smooth, fast, and safe experience, perfect for high-rise residential and commercial spaces.",
        image: withBasePath("./assets/products/Fraction_Lift.jpg"),
      },
    ],
  },
  {
    title: "Goods Elevators",
    description:
      "Goods elevators are heavy-duty lifts designed to transport large and bulky items in warehouses, factories, and industries.",
    image: withBasePath("./assets/products/Goods_Lift.jpg"),
  },
  {
    title: "Structure Elevators",
    description:
      "Structure elevators are self-supporting and can be installed without a machine room or shaft wall, ideal for retrofits.",
    image: withBasePath("./assets/products/Structure_Lift.jpg"),
  },
  {
    title: "Commercial Elevators",
    description:
      "Commercial elevators are built for heavy usage, combining aesthetics and performance for offices, malls, and complexes.",
    image: withBasePath("./assets/products/Commercial_Lifts.jpeg"),
  },
];

export default function OurProducts() {
  return (
    <section className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>Our Products</h2>

      {products.map((product, index) => (
        <div
          key={index}
          id={product.title.toLowerCase().replace(/\s+/g, "-")}
          className={`${styles.mainProduct} ${styles["bg" + ((index % 6) + 1)]}`}
        >
          {/* Main Heading */}
          <h3 className={styles.mainHeading}>
            <FaAngleDoubleRight className={styles.icon} />
            {product.title}
          </h3>

          {product.subProducts ? (
            <div className={styles.subProductsWrapper}>
              {product.subProducts.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  id={sub.title.toLowerCase().replace(/\s+/g, "-")}
                  className={`${styles.productCard} ${
                    subIndex % 2 === 0 ? styles.leftImage : styles.rightImage
                  }`}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      width={400}
                      height={300}
                      quality={90}
                    />
                  </div>
                  <div className={styles.content}>
                    <h4 className={styles.subHeading}>
                      <FaAngleRight className={styles.iconSmall} />
                      {sub.title}
                    </h4>
                    <p>{sub.description}</p>
                    <p className={styles.supportText}>
                      For sales inquiries and support, or any questions regarding our products, please contact us. Our team is always ready to assist you promptly.
                    </p>
                    <Link href="/contact" className={styles.contactBtn}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`${styles.productCard} ${
                index % 2 === 0 ? styles.leftImage : styles.rightImage
              }`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image || ""}
                  alt={product.title}
                  width={400}
                  height={300}
                  quality={90}
                />
              </div>
              <div className={styles.content}>
                <p>{product.description}</p>
                <p className={styles.supportText}>
                  For sales inquiries and support, or any questions regarding our products, please contact us. Our team is always ready to assist you promptly.
                </p>
                <Link href="/contact" className={styles.contactBtn}>
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
