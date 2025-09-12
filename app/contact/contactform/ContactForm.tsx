"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import ContactImg from "./../../../public/assets/contact/Contact_Form.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    product: "",
    queryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      location: "",
      product: "",
      queryType: "",
      message: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.location ||
      !formData.product ||
      !formData.queryType ||
      !formData.message
    ) {
      toast.error("⚠️ Please fill all required fields.", {
        position: "top-right",
      });
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!", {
            position: "top-right",
          });
          clearForm();
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
          });
          clearForm();
        }
      );
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Us If Any Queries</h2>
      <div className={styles.container}>
        {/* Left Side Image */}
        <div className={styles.left}>
          <Image
            src={ContactImg}
            alt="Contact Lift"
            className={styles.contactImage}
            fill
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className={styles.right}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="">Select Product</option>
              <option value="Home Elevator">Home Elevator</option>
              <option value="Apartment Elevator">Apartment Elevator</option>
              <option value="Hospital Elevator">Hospital Elevator</option>
              <option value="Commercial Elevator">Commercial Elevator</option>
              <option value="Commercial Elevator">Other</option>
            </select>
            <select
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              required
            >
              <option value="">Sales & Service</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer autoClose={3000} hideProgressBar={false} newestOnTop />
    </section>
  );
};

export default ContactForm;
