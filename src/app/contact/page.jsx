"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from 'next/link';
import Image from "next/image";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello!";

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
      <div className="h-full flex flex-col md:flex-row items-center justify-around overflow-auto">
        <div className="h-full w-5/6 md:w-full flex flex-col items-center md:pl-20">
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-center text-4xl self-start mt-8 mb-6">
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
            </div>
          </div>
          {/* FORM CONTAINER */}
          <form
            onSubmit={sendEmail}
            ref={form}
            className="h-4/5 w-4/5 bg-gradient-to-b from-white to-gray-100 rounded-xl text-xl flex flex-col gap-12 justify-center px-8 pb-4 md:mr-24"
          >
            <span>Your Message</span>
            <textarea
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
            />
            <span>Your E-Mail Address</span>
            <input
              name="user_email"
              type="text"
              className="bg-transparent border-b-2 border-b-black outline-none"
            />
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
        </div>

        {/* ANIMATED CONTAINER */}
        <div className="h-full w-full mt-36 px-24 flex flex-col items-center justify-center text-center">
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Software Developer Designer Engineer
                </textPath>
              </text>
            </motion.svg>
            <Link href="https://linkedin.com/in/sanjkhera">
              <div className="w-20 h-20 md:w-36 md:h-36 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
                <button className="w-full h-full rounded-full flex items-center justify-center">
                  Hire Me
                </button>
              </div>
            </Link>
          </div>
          {/* SOCIAL LINKS */}
          <div className='flex flex-row items-center justify-center gap-4 mb-56'>
            <Link href="https://github.com/sanjamkhera">
              <Image src="/AnimatedPortfolio/github.png" alt="" width={48} height={48} />
            </Link>
            <Link href="https://linkedin.com/in/sanjkhera">
              <Image src="/AnimatedPortfolio/linkedin.png" alt="" width={48} height={48} />
            </Link>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export default ContactPage;