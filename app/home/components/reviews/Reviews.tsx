"use client";
import React from "react";
import styles from "./Reviews.module.css";
import Review from "./Review";
import withBasePath from "../../../utils/withBasePath"; // ✅ import utility

const reviews = [
  {
    id: 1,
    name: "Rajapushpa Properties",
    image: withBasePath("./assets/home/Clients_Reviews/Client1.jpg"),
    text: "MG Elevators made our apartment rides smooth, safe, and reliable. Truly world-class service!",
  },
  {
    id: 2,
    name: "Choudhary Jewellers",
    image: withBasePath("./assets/home/Clients_Reviews/Client2.jpg"),
    text: "Very professional installation and modern design. Our Customers love the new elevators.",
  },
  {
    id: 3,
    name: "SLN Developer",
    image: withBasePath("./assets/home/Clients_Reviews/Client4.jpg"),
    text: "MG Elevators provides excellent maintenance and quick support whenever needed.",
  },
  {
    id: 4,
    name: "Rudhra Constructions",
    image: withBasePath("./assets/home/Clients_Reviews/Client6.jpg"),
    text: "Energy-efficient and smart elevators! A perfect choice for our commercial building.",
  },
  {
    id: 5,
    name: "SVLN Developers",
    image: withBasePath("./assets/home/Clients_Reviews/Client5.jpg"),
    text: "Stylish cabins with smooth rides. Our guests always compliment the elevators.",
  },
  {
    id: 6,
    name: "Utsav Fashion",
    image: withBasePath("./assets/home/Clients_Reviews/Client3.jpg"),
    text: "MG Elevators has the best customer service and reliable products. Highly recommended!",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.reviewsHeading}>What Our Clients Say</h2>
      <div className={styles.reviewsWrapper}>
        <div className={styles.reviewsTrack}>
          {reviews.concat(reviews).map((review, index) => (
            <Review
              key={index}
              name={review.name}
              image={review.image}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
