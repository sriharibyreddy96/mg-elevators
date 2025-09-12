"use client";
import React from "react";
import styles from "./Reviews.module.css";
import Review from "./Review";

const reviews = [
  {
    id: 1,
    name: "Rajapushpa Properties",
    image: "/assets/home/Clients_Reviews/Client1.jpg",
    text: "MG Elevators made our apartment rides smooth, safe, and reliable. Truly world-class service!",
  },
  {
    id: 2,
    name: "Vasantha City",
    image: "/assets/home/Clients_Reviews/Client10.jpg",
    text: "Very professional installation and modern design. Our residents love the new elevators.",
  },
  {
    id: 3,
    name: "SLN Developer",
    image: "/assets/home/Clients_Reviews/Client4.jpg",
    text: "MG Elevators provides excellent maintenance and quick support whenever needed.",
  },
  {
    id: 4,
    name: "Rudhra Constructions",
    image: "/assets/home/Clients_Reviews/Client6.jpg",
    text: "Energy-efficient and smart elevators! A perfect choice for our commercial building.",
  },
  {
    id: 5,
    name: "SVLN Developers",
    image: "/assets/home/Clients_Reviews/Client5.jpg",
    text: "Stylish cabins with smooth rides. Our guests always compliment the elevators.",
  },
  {
    id: 6,
    name: "Mamatha Hospital",
    image: "/assets/home/Clients_Reviews/Client11.jpg",
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
