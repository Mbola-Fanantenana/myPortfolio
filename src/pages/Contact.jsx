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
        <div name="contact">
            <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                
                {/* Titre */}
                <div className="mb-8 text-center">
                <p className="text-3xl font-semibold text-gray-700">Contact</p>
                <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
                </div>

                {/* Formulaire aligné à gauche */}
                <motion.form
                method="POST"
                action="https://forminit.com/f/ko8t1wkcbrh"
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col max-w-md gap-4"
                >
                <motion.input
                    variants={fieldVariants}
                    type="text"
                    name="fi-sender-fullName"
                    placeholder="Your name"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#F25F4C]"
                />

                <motion.input
                    variants={fieldVariants}
                    type="email"
                    name="fi-sender-email"
                    placeholder="Email address"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#F25F4C]"
                />

                <motion.textarea
                    variants={fieldVariants}
                    name="fi-text-message"
                    rows={4}
                    placeholder="Your message"
                    required
                    className="p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-[#F25F4C]"
                />

                <motion.button
                    variants={fieldVariants}
                    type="submit"
                    className="self-start px-6 py-2 rounded-md bg-[#F25F4C] text-white text-sm hover:bg-[#d14a3b] transition"
                >
                    Send
                </motion.button>
                </motion.form>

                {/* Copyright */}
                <p className="mt-8 text-center text-gray-500 text-sm">
                © All rights reserved • Thank you for visiting 🙂
                </p>

            </div>
            </div>
                
  );

}

export default Contact