"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

// EmailJS Config
const SERVICE_ID = "service_vgxvmzo";
const TEMPLATE_ID_ADMIN = "template_fhrrohy";
const TEMPLATE_ID_USER = "template_3d6i1wa";
const PUBLIC_KEY = "UgNJl_x2suAxwIvBH";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, mobile, location, product, queryType, message } =
      formData;

    if (
      !name ||
      !email ||
      !mobile ||
      !location ||
      !product ||
      !queryType ||
      !message
    ) {
      toast.error("⚠️ Please fill all required fields.", {
        position: "top-right",
      });
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, formData, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, formData, PUBLIC_KEY);

      toast.success("✅ Message sent successfully!", {
        position: "top-right",
      });
      clearForm();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send message. Please try again later.", {
        position: "top-right",
      });
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Us</h2>
      <div className={styles.container}>
        {/* Left Side - Office Address & Timings */}

        <div className={styles.right}>
          <div className={styles.infoCard}>
            <h3>MG ELEVATORS</h3>
            <p>
              Flat No. 402, SRI SAI SRINIVASAM, PLOT NO 251, Jagan Studios Rd,
              near NEO GEETHANJALI SCHOOL, Kakatiya Hills, Vasanth Nagar
              Colony, Pragathi Nagar, NIZAMPET, Hyderabad, Telangana 500090
            </p>

            <h4>Business Hours</h4>
            <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
            <p>Sunday: Closed</p>
            <p>In Emergency 24/7 Available &nbsp;&nbsp;
            <Link href="/contact" className={styles.contactBtn}>
                      Contact Us
                    </Link>  
            </p>
          </div>
        </div>

        {/* Right Side - Form */}

        <div className={styles.left}>
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
              <option value="Apartment Elevator">Residential Elevator</option>
              <option value="Office Elevator">Office Elevator</option>
              <option value="Hospital Elevator">Hospital Elevator</option>
              <option value="Hydraulic Elevator">Hydraulic Elevator</option>
              <option value="Commercial Elevator">Commercial Elevator</option>
              <option value="Other">Other</option>
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
              placeholder="Your Message (Ex: I Need Home Elevator With Auto Door)"
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

      <ToastContainer autoClose={3000} hideProgressBar={false} newestOnTop />
    </section>
  );
};

export default ContactForm;
