"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-1/3 flex flex-col gap-16 text-xl md:h-2/3">
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 mt-12 relative min-h-[100px] min-w-[250px]'>
          <Image src={`/AnimatedPortfolio/hero.png`} alt="my-image" fill className="object-contain rounded-lg" />
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 flex flex-col items-center gap-8 justify-center '>
          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-0">Sanjam Khera</h1>
          <p className="text-xl mt-0 p-0">Designer | Engineer | Developer</p>
          {/* BUTTONS */}
          <div className="w-full flex items-center flex-row justify-center">
            <Link href="/portfolio">
              <button className="my-2 p-2 rounded-lg ring-1 ring-black bg-black text-white m-4">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="my-2 p-2 rounded-lg ring-1 ring-black m-4">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-48 border-b border-gray-400 w-3/5 mx-auto md:my-28"></div>
      <div className="p-8 flex flex-col items-center justify-center mt-2 overflow-auto box-sizing:border-box">
        <h2 className="text-2xl font-bold text-left self-start mb-2 md:ml-56">About this Site</h2>
        <div className="container text-justify bg-white p-4 rounded-lg md:w-3/5">
          <p className="text-sm">
            This portfolio website showcases my skills, work history, and projects. I use various modern technologies i.e.
            React.js is utilized for UI components, Framer Motion for animations, and Next.js for server-side rendering.
            Styling is achieved through Tailwind CSS, and the programming language used is JavaScript.
            Deployment is handled using AWS EC2 and GitHub Actions, with Docker for containerization. 
          </p>
          <p className="text-sm mt-2">
            The websites components include four pages About, Contact, Portfolio, Home, a Brain (dedicated to SVG) component, Navigation Bar, Navigation Links, and Transition Provider.
            DevOps files like Dockerfile and docker-compose.yml are included for creating a Docker image and defining services, networks, and volumes.
          </p>
          <p className="text-sm mt-2">
            For CI/CD, the deploy-aws.yml file triggers a manual and automatic (For CI/CD on Github Actions) workflow that clones the repository, generates a deployment package,
            and deploys the application to GitHub Pages and AWS.
          </p>
        </div>
      </div>
      <div className="mt-0 border-b border-gray-400 w-3/5 mx-auto md:my-28"></div>
      <div className="p-8 flex flex-col items-center justify-center mt-2 overflow-auto box-sizing:border-box">
        <h2 className="text-2xl font-bold text-left self-start mb-2 md:ml-56">Personal Blog</h2>
        <div className="container text-justify bg-white p-4 rounded-lg md:w-3/5">
          <h3 className="text-l font-bold">Computer Science, University of Manitoba</h3>
          <p className="text-sm mt-2">In first year, We were introduced to the fundamentals of programming, algorithms, and data structures. I spent countless hours in the lab, debugging code and learning the intricacies of Python and Java.</p>
          <p className="text-sm mt-2">In second year, we delved deeper. We studied advanced topics like operating systems, computer networks, and database systems. We also started working on his own projects, applying the theoretical knowledge he gained in practical scenarios.</p>
          <p className="text-sm mt-2">By third year, We were well-versed in several programming languages and had a solid understanding of software development principles. We took elective courses in Artificial Intelligence and Machine Learning, which sparked his interest in data science.</p>
          <p className="text-sm mt-2">In final year, We worked on various project as showcased in this portfolio.</p>
          <p className="text-sm mt-2">Throughout the four years at the University of Manitoba, I not only acquired a strong foundation in Computer Science but also developed critical thinking and problem-solving skills that prepared him for the tech industry.</p>
        </div>
        <div className="container m-auto p-4 text-justify bg-white rounded-lg mt-12 md:w-3/5">
          <h3 className="text-l font-bold">Mechanical Engineering Experience</h3>
          <p className="text-sm mt-2">My journey in Mechanical Engineering began at Red River College, where I pursued a Mechanical Engineering Technology program.</p>
          <p className="text-sm mt-2">My first professional experience was as a Controls Technician at Mikkelsen Coward, where I created wiring layouts and installation packages for electricians and developed sequences of operations for programmers.</p>
          <p className="text-sm mt-2">I then moved on to VAW Systems as an Equipment Designer. Here, I worked with Project Managers and customers to interpret specifications, used 3D modeling tools like Inventor for design documentation, and created manufacturing packages using AutoCAD. I also took the initiative to automate repetitive tasks and worked on standardizing and improving existing product designs.</p>
          <p className="text-sm mt-2">Most recently, I worked as a Mechanical Designer at K-HART Industries. I was part of the team that developed hydraulic systems for farm equipment and created macros for 3D modeling in On-Shape. I also managed version control using On-Shapes in-built release management and used tools like Sim-Solid for stress analysis and Odoo for operational management.</p>
          <p className="text-sm mt-2">Throughout my career, I have worked on numerous projects, including the design of a hydraulic lift system for a farm seeding drill and the creation of drawing packages for over 1200 custom industrial silencers. I have also reverse-engineered a hydraulic bending machine and designed an industrial-sized bucket elevator for a farming application.</p>
        </div>
        <div className="container m-auto p-4 text-justify bg-white rounded-lg mt-12 md:w-3/5">
          <h3 className="text-l font-bold">Moving to Vancouver</h3>
          <p className="text-sm mt-2">Moving from Winnipeg, Manitoba, where I lived for over 12 years, to Vancouver was a significant transition in my life.</p>
          <p className="text-sm mt-2">The move brought with it a mix of struggles and opportunities that are common for many students. Adapting to a new city meant finding my way around, adjusting to a different pace of life, and building a new social circle.</p>
          <p className="text-sm mt-2">The weather in Vancouver, with its mild winters and beautiful summers, offered a stark contrast to the colder climate I was used to in Winnipeg. It was refreshing to experience the lush greenery and outdoor activities that Vancouver had to offer, including my passions for mountain biking and climbing.</p>
          <p className="text-sm mt-2">Speaking of climbing, my recent accomplishment of climbing The Squamish Chief ten times. This challenge, fueled by determination and intensity, was not just about physical fitness but also about pushing my own limits and embracing a spiritual connection to the journey.</p>
          <p className="text-sm mt-2">The Squamish Chief itself stands as a monumental symbol of challenge and natural beauty. Its massive granite structure attracts climbers globally, offering a unique experience that tests both skill and courage. Climbing its peaks was not just about conquering a physical obstacle but also about mastering my own inner hurdles, drawing strength from the symbolism and history that surrounded this remarkable natural wonder.</p>
          <p className="text-sm mt-2">My move to Vancouver is a pivotal moment in my life, filled with challenges, opportunities, and personal growth. Embracing the outdoors, pursuing my passions, and undertaking challenges like climbing The Squamish Chief have all contributed to shaping my journey and my experiences in this vibrant city.</p>
        </div>
      </div>
      <div className="m-6 border-b border-gray-400 w-3/5 mx-auto"></div>
    </motion.div>
  );
};

export default Homepage;
