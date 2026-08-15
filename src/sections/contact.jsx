import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Particlelay from "../components/ParticleLay";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY_ID

export default function Contact() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [status, setStatus] = useState("");

  // Input change
  const handelChnage = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    if (error[name]) {
      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation
  const validateForm = () => {
    const required = ["name", "email", "role", "message"];
    const newError = {};

    required.forEach((field) => {
      if (!formData[field].trim()) {
        newError[field] = "Fill this field";
      }
    });

    // Email validation
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newError.email = "Enter a valid email";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  // Submit
  const handelSubmit = async (e) => {
    e.preventDefault();

    console.log("SERVICE_ID =", SERVICE_ID);
    console.log("TEMPLATE_ID =", TEMPLATE_ID);
    console.log("PUBLIC_KEY =", PUBLIC_KEY);

    if (!validateForm()) return;

    setStatus("sending");

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          message: formData.message,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        role: "",
        message: "",
      });

      setError({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section
  id="contact"
  className="relative min-h-screen w-full bg-black overflow-hidden text-white px-4 sm:px-6 lg:px-10 flex items-center justify-center"
>
  <Particlelay />

  <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center">

    <motion.div
      className="
        w-full max-w-xl
        bg-white/5 backdrop-blur-md
        p-5 sm:p-6 md:p-7
        rounded-2xl
        shadow-2xl
        border border-white/10
      "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
        Connect with me
      </h2>

      <form
        className="flex flex-col gap-3.5"
        onSubmit={handelSubmit}
      >

        {/* NAME */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">
            Your Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handelChnage}
            className={`w-full p-2.5 rounded-md bg-white/10 border ${
              error.name
                ? "border-red-500"
                : "border-gray-500"
            } text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500`}
          />

          {error.name && (
            <p className="text-red-500 text-xs mt-1">
              {error.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">
            Your Email <span className="text-red-500">*</span>
          </label>

          <input
            placeholder="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handelChnage}
            className={`w-full p-2.5 rounded-md bg-white/10 border ${
              error.email
                ? "border-red-500"
                : "border-gray-500"
            } text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500`}
          />

          {error.email && (
            <p className="text-red-500 text-xs mt-1">
              {error.email}
            </p>
          )}
        </div>

        {/* SUBJECT */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">
            Subject <span className="text-red-500">*</span>
          </label>

          <input
            placeholder="Subject"
            name="role"
            type="text"
            value={formData.role}
            onChange={handelChnage}
            className={`w-full p-2.5 rounded-md bg-white/10 border ${
              error.role
                ? "border-red-500"
                : "border-gray-500"
            } text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500`}
          />

          {error.role && (
            <p className="text-red-500 text-xs mt-1">
              {error.role}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            placeholder="Write your message..."
            name="message"
            value={formData.message}
            onChange={handelChnage}
            rows="3"
            className={`w-full p-2.5 rounded-md bg-white/10 border ${
              error.message
                ? "border-red-500"
                : "border-gray-500"
            } text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 resize-none`}
          />

          {error.message && (
            <p className="text-red-500 text-xs mt-1">
              {error.message}
            </p>
          )}
        </div>

        {/* STATUS */}
        {status && (
          <p
            className={`text-sm text-center ${
              status === "success"
                ? "text-green-400"
                : status === "error"
                ? "text-red-400"
                : "text-yellow-400"
            }`}
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message sent successfully ✅"
              : "Something went wrong ❌"}
          </p>
        )}

        {/* BUTTON */}
        <motion.button
          className="
            w-full
            bg-blue-600 hover:bg-blue-700
            disabled:opacity-60
            text-white
            py-2.5
            rounded-md
            font-semibold
            transition
          "
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending"
            ? "Sending..."
            : "Send Message"}
        </motion.button>

      </form>
    </motion.div>

  </div>
</section>
  );
}