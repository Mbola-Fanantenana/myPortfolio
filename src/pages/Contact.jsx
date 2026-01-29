import React, { useState }from 'react'
import { Forminit } from "forminit";
import { motion } from "framer-motion";

const forminit = new Forminit();
const FORM_ID = 'ko8t1wkcbrh';

function Contact() {
const [status, setStatus] = useState('idle'); 
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    const { data, error } = await forminit.submit(FORM_ID, formData);

    if (error) {
      setStatus('error');
      setError(error.message);
    } else {
      setStatus('success');
      form.reset();
    }
  }

  const containerVariants = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.1,
        },
    },
    };

    const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };


    return (
    <div
        name="contact"
        className="md:max-w-[900px] sm:max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full"
    >

      <div className="mb-8 text-center">
        <p className="text-3xl font-semibold text-gray-700">Contact me</p>
        <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
      </div>
      {/* Sous-titre */}
      <p className="py-4 text-[14px] text-gray-600 text-center">
        Submit the form below
      </p>

      {/* Formulaire */}
      <motion.form
        method="POST"
        action="https://forminit.com/f/ko8t1wkcbrh"
        className="flex flex-col max-w-[600px] w-full mx-auto space-y-4 bg-gray-50 p-6 rounded-xl shadow-sm"
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        >
        {/* Name */}
        <motion.label variants={fieldVariants} className="text-sm font-medium text-gray-600">
            Your Name
        </motion.label>
        <motion.input
            variants={fieldVariants}
            type="text"
            placeholder="Enter your name"
            name="fi-sender-fullName"
            required
            onInvalid={(e) => e.target.setCustomValidity("Please fill out this field")}
            onInput={(e) => e.target.setCustomValidity("")}
            className="bg-white p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25F4C]/30 focus:border-[#F25F4C]"
        />

        {/* Email */}
        <motion.label variants={fieldVariants} className="text-sm font-medium text-gray-600">
            Email Address
        </motion.label>
        <motion.input
            variants={fieldVariants}
            type="email"
            placeholder="Enter your email"
            name="fi-sender-email"
            required
            onInvalid={(e) => e.target.setCustomValidity("Please fill out this field")}
            onInput={(e) => e.target.setCustomValidity("")}
            className="bg-white p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25F4C]/30 focus:border-[#F25F4C]"
        />

        {/* Message */}
        <motion.label variants={fieldVariants} className="text-sm font-medium text-gray-600">
            Message
        </motion.label>
        <motion.textarea
            variants={fieldVariants}
            rows={5}
            placeholder="Write your message here"
            name="fi-text-message"
            required
            onInvalid={(e) => e.target.setCustomValidity("Please fill out this field")}
            onInput={(e) => e.target.setCustomValidity("")}
            className="bg-white p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25F4C]/30 focus:border-[#F25F4C]"
        />

        {/* Status messages */}
        {status === 'error' && <motion.p variants={fieldVariants} className="text-red-600">{error}</motion.p>}
        {status === 'success' && <motion.p variants={fieldVariants} className="text-green-600">Message sent!</motion.p>}

        <motion.p variants={fieldVariants} className="text-xs text-gray-500 text-center">
            We’ll only use your email to reply. No spam.
        </motion.p>

        {/* Submit Button */}
        <motion.button
            variants={fieldVariants}
            type="submit"
            disabled={status === 'loading'}
            className="mx-auto bg-[#F25F4C] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d14a3b] hover:shadow-md transition-all duration-200"
        >
            {status === 'loading' ? 'Sending...' : 'Send'}
        </motion.button>
        </motion.form>



      {/* Copyright */}
      <p className="mt-8 text-center text-gray-500 text-sm">
        © All rights reserved • Thank you for visiting 🙂
        </p>

    </div>
  );

}

export default Contact