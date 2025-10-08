"use client";

import React, { useEffect, useState } from "react";
import styles from "./ContactFromModal.module.css";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// EmailJS Config
const SERVICE_ID = "service_vgxvmzo";
const TEMPLATE_ID_ADMIN = "template_fhrrohy";
const TEMPLATE_ID_USER = "template_3d6i1wa";
const PUBLIC_KEY = "UgNJl_x2suAxwIvBH";

// Custom interface (renamed to avoid clash with browser FormData)
interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  location: string;
  product: string;
  queryType: string;
  message: string;
}

const ContactFormModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile: "",
    location: "",
    product: "",
    queryType: "",
    message: "",
  });

  // Show modal once every 24 hours
  useEffect(() => {
    const lastShown = localStorage.getItem("contactFormShown");
    const now = new Date().getTime();

    if (!lastShown || now - parseInt(lastShown) > 1000) {
      setIsOpen(true);
      localStorage.setItem("contactFormShown", now.toString());
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validations
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("⚠️ Please enter a valid email address.");
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      toast.error("⚠️ Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      // Send email to admin
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_ADMIN,
        { ...formData },
        PUBLIC_KEY
      );

      // Send confirmation email to user
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_USER,
        { ...formData },
        PUBLIC_KEY
      );

      toast.success("✅ Message sent successfully!");
      clearForm();
      setIsOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send message. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <X size={20} />
        </button>
        <h2 className={styles.heading}>Contact Us</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.formInput}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.formInput}
            type="tel"
            name="mobile"
            placeholder="+91 Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            className={styles.formInput}
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <select
            className={styles.formSelect}
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select Product</option>
            <option value="Passenger">Passenger (Auto & Manual)</option>
            <option value="Home">Home Elevators</option>
            <option value="Hospital">Hospital Elevators</option>
            <option value="Hydraulic">Hydraulic Elevators</option>
            <option value="Goods">Goods Elevators</option>
            <option value="Flame Proof">Flame Proof Elevators</option>
            <option value="Car">Car Elevators</option>
            <option value="Capsule">Capsule Elevators</option>
          </select>

          <select
            className={styles.formSelect}
            name="queryType"
            value={formData.queryType}
            onChange={handleChange}
            required
          >
            <option value="">Select Query Type</option>
            <option value="General">General Inquiry</option>
            <option value="Support">Customer Support</option>
            <option value="Service">Maintenance/Service</option>
            <option value="Business">Business Collaboration</option>
          </select>

          <textarea
            className={styles.formTextarea}
            name="message"
            placeholder="Your Message (Ex: I Need Home Elevator With Auto Door)"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>

        {/* Toast Notification Container */}
        <ToastContainer autoClose={3000} hideProgressBar newestOnTop />
      </div>
    </div>
  );
};

export default ContactFormModal;
