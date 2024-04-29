"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from 'next/link';
import Image from "next/image";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20">
        {/* TEXT CONTAINER */}
        <div className="h-1/4 lg:w-1/2 flex items-center justify-center text-4xl md:mt-4">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 sm:w-4/5 md:w-2/5 bg-gray-200 rounded-2xl text-l flex flex-col gap-8 justify-center px-8 py-4 mb-4"
        >
          <span>Your Message</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>Your email Address</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded-lg font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>          
        {/* SOCIAL LINKS */}
          <div className='sm:mt-12 h-1/5 flex flex-row gap-4 md:mt-4'>
            <Link href="https://github.com/sanjamkhera">
                <Image src="/AnimatedPortfolio/github.png" alt="" width={48} height={48} />
            </Link>
            <Link href="https://linkedin.com/in/sanjkhera">
                <Image src="/AnimatedPortfolio/linkedin.png" alt="" width={48} height={48} />
            </Link>
          </div>
      </div>

    </motion.div>
  );
};

export default ContactPage;