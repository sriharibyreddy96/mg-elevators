"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import styles from "./Faqs.module.css";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What types of elevators do you provide?",
    answer:
      "We offer elevators for residential buildings, apartments, offices, and hospitals with customizable designs.",
  },
  {
    question: "How safe are MG Elevators?",
    answer:
      "Our elevators are built with advanced safety features including emergency brakes, overload sensors, and alarm systems.",
  },
  {
    question: "Do you provide maintenance services?",
    answer:
      "Yes, we provide 24/7 maintenance and service support to ensure your elevators run smoothly at all times.",
  },
  {
    question: "Can I customize the design of my elevator?",
    answer:
      "Absolutely! We provide a variety of cabin finishes, lighting options, and designs tailored to your building.",
  },
  {
    question: "Are MG Elevators energy efficient?",
    answer:
      "Yes, our elevators are designed with eco-friendly technology that reduces energy consumption and saves costs.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can contact us through our website or customer service, and we’ll provide a tailored quote for your requirements.",
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqCard}>
            <div
              className={styles.questionRow}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className={styles.question}>{faq.question}</h3>
              <span className={styles.icon}>
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                <hr className={styles.separator} />
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
