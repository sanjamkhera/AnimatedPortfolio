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
      <div className="h-1/3 flex flex-col gap-16 text-xl">
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 mt-12 relative min-h-[100px] min-w-[250px]'>
          <Image src="/hero.png" alt="my-image" fill className="object-contain rounded-lg" />
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
      <div className="mt-36 border-b border-gray-400 w-3/5 mx-auto"></div>
      <div className="p-8 flex flex-col items-center justify-center mt-2 overflow-auto box-sizing:border-box">
        <h2 className="text-2xl font-bold text-left self-start mb-2">About this Site</h2>
        <div className="container text-justify bg-white p-4 rounded-lg">
          <p className="text-sm">
            This portfolio website showcases my skills, work history, and projects. I use various modern technologies i.e.
            React.js is utilized for UI components, Framer Motion for animations, and Next.js for server-side rendering.
            Styling is achieved through Tailwind CSS, and the programming language used is JavaScript.
            Deployment is handled using AWS Elastic Beanstalk, with Docker providing containerization.
          </p>
          <p className="text-sm mt-2">
            The website's content includes four pages About Me, Contact Information, Portfolio Showcase, Home, Brain (dedicated to SVG),
            Navigation Bar, Navigation Links, and Transition Provider.
            DevOps files like Dockerfile and docker-compose.yml are included for creating a Docker image and defining services, networks, and volumes.
          </p>
          <p className="text-sm mt-2">
            For CI/CD, the deploy-aws.yml file triggers a manual workflow that clones the repository, generates a deployment package excluding certain directories,
            and deploys the application to AWS Elastic Beanstalk using GitHub secrets for access keys.
          </p>
        </div>
      </div>
      <div className="mt-6 border-b border-gray-400 w-3/5 mx-auto"></div>
      <div className="p-8 flex flex-col items-center justify-center mt-2 overflow-auto box-sizing:border-box">
        <h2 className="text-2xl font-bold text-left self-start mb-2">Personal Blog</h2>
        <div className="container m-auto p-4 text-justify bg-white rounded-lg">
          <h3 className="text-xl font-bold">Computer Science, University of Manitoba</h3>
          <p className="text-sm mt-2">In his first year, he was introduced to the fundamentals of programming, algorithms, and data structures. He spent countless hours in the lab, debugging code and learning the intricacies of Python and Java.</p>
          <p className="text-sm mt-2">In his second year, John delved deeper into the world of Computer Science. He studied advanced topics like operating systems, computer networks, and database systems. He also started working on his own projects, applying the theoretical knowledge he gained in practical scenarios.</p>
          <p className="text-sm mt-2">By his third year, John was well-versed in several programming languages and had a solid understanding of software development principles. He took elective courses in Artificial Intelligence and Machine Learning, which sparked his interest in data science.</p>
          <p className="text-sm mt-2">In his final year, John worked on a capstone project that involved developing a machine learning model to predict stock market trends. He also completed an internship at a local tech company, gaining valuable industry experience.</p>
          <p className="text-sm mt-2">Throughout his four years at the University of Manitoba, John not only acquired a strong foundation in Computer Science but also developed critical thinking and problem-solving skills that prepared him for the tech industry."</p>
        </div>
        <div className="container m-auto p-4 text-justify bg-white rounded-lg mt-12">
          <h3 className="text-xl font-bold">Mechanical Engineering Exp</h3>
          <p className="text-sm mt-2">My journey in Mechanical Engineering began at Red River College, where I pursued a Mechanical Engineering Technology program from August 2012 to December 2015.</p>
          <p className="text-sm mt-2">My first professional experience was as a Controls Technician at Mikkelsen Coward, where I created wiring layouts and installation packages for electricians and developed sequences of operations for programmers.</p>
          <p className="text-sm mt-2">I then moved on to VAW Systems as an Equipment Designer. Here, I worked with Project Managers and customers to interpret specifications, used 3D modeling tools like Inventor for design documentation, and created manufacturing packages using AutoCAD. I also took the initiative to automate repetitive tasks and worked on standardizing and improving existing product designs.</p>
          <p className="text-sm mt-2">Most recently, I worked as a Mechanical Designer at K-HART Industries. I was part of the team that developed hydraulic systems for farm equipment and created macros for 3D modeling in On-Shape. I also managed version control using On-Shape's in-built release management and used tools like Sim-Solid for stress analysis and Odoo for operational management.</p>
          <p className="text-sm mt-2">Throughout my career, I have worked on numerous projects, including the design of a hydraulic lift system for a farm seeding drill and the creation of drawing packages for over 1200 custom industrial silencers. I have also reverse-engineered a hydraulic bending machine and designed an industrial-sized bucket elevator for a farming application.</p>
        </div>
        <div className="container m-auto p-4 text-justify bg-white rounded-lg mt-12">
          <h3 className="text-xl font-bold">Moving to Vancouver</h3>
          <p className="text-sm mt-2">Moving from Winnipeg, Manitoba, where I attended both Red River College and the University of Manitoba, to Vancouver was a significant transition in my life.</p>
          <p className="text-sm mt-2">The move brought with it a mix of struggles and opportunities that are common for many students. Adapting to a new city meant finding my way around, adjusting to a different pace of life, and building a new social circle.</p>
          <p className="text-sm mt-2">The weather in Vancouver, with its mild winters and beautiful summers, offered a stark contrast to the colder climate I was used to in Winnipeg. It was refreshing to experience the lush greenery and outdoor activities that Vancouver had to offer, including my passions for mountain biking and climbing.</p>
          <p className="text-sm mt-2">Speaking of climbing, my recent accomplishment of climbing The Squamish Chief multiple times ties into a personal goal and a deeper spiritual journey. Inspired by the character Ravana from the Hindu epic Ramayana, who sacrificed his ten heads to impress Lord Shiva, I embarked on the challenge of climbing The Squamish Chief ten times.</p>
          <p className="text-sm mt-2">This challenge, fueled by determination and intensity, was not just about physical fitness but also about pushing my own limits and embracing a spiritual connection to the journey.</p>
          <p className="text-sm mt-2">The Squamish Chief itself stands as a monumental symbol of challenge and natural beauty. Its massive granite structure attracts climbers globally, offering a unique experience that tests both skill and courage. Climbing its peaks was not just about conquering a physical obstacle but also about mastering my own inner hurdles, drawing strength from the symbolism and history that surrounded this remarkable natural wonder.</p>
          <p className="text-sm mt-2">In summary, my move to Vancouver marked a pivotal moment in my life, filled with challenges, opportunities, and personal growth. Embracing the outdoors, pursuing my passions, and undertaking challenges like climbing The Squamish Chief have all contributed to shaping my journey and my experiences in this vibrant city.</p>
        </div>
      </div>
      <div className="m-6 border-b border-gray-400 w-3/5 mx-auto"></div>
    </motion.div>
  );
};

export default Homepage;
