"use client";
// Importing necessary libraries and hooks
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


// Importing necessary libraries and hooks
const items = [
  {
    id: 1,
    color: "from-green-100 to-orange-100",
    title: "CI/CD Pipeline W/ GitHub Actions",
    desc: "For my personal project, I used Terraform and GitHub Actions to orchestrate Docker container deployment, creating a seamless CI/CD pipeline for my Node.js app. AWS services like EC2, S3, IAM, and ECR were integrated, following Agile methodologies for iterative development and scalable cloud-native solutions on GitHub.",
    img: "https://cdn.pixabay.com/photo/2018/10/01/15/38/plan-3716541_960_720.jpg",
    link: "https://github.com/sanjamkhera/Warehouse-Operations.git",
  },
  {
    id: 2,
    color: "from-orange-100 to-blue-100",
    title: "Warehouse Operations",
    desc: "This project is an event-driven simulation program for a fictional company. The program simulates business operations for a warehouse of an Online store, focusing on order processing, shipping, penalties for late deliveries, and workforce management.",
    img: "https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_1280.jpg",
    link: "https://github.com/sanjamkhera/Warehouse-Operations.git",
  },
  {
    id: 3,
    color: "from-blue-100 to-yellow-100",
    title: "ED Fashion Online Store",
    desc: " This online store interface built using HTML, JavaScript and CSS, no additional frameworks or libraries used. A responsive animated design for a user-centered website with integrated search, filtering, product comparison, and order tracking.",
    img: "https://cdn.pixabay.com/photo/2020/09/20/04/28/delivery-5585969_960_720.jpg",
    link: "https://github.com/sanjamkhera/HCIEvaluationEDFashion.git",
  },
  {
    id: 4,
    color: "from-yellow-100 to-violet-100",
    title: "NBA Database",
    desc: "Implemented a relational database for an NBA season, converting 49,000 lines of raw data into normalized data across 12 tables. Also developed useful queries for data analysis.",
    img: "https://cdn.pixabay.com/photo/2017/08/03/19/39/people-2578102_960_720.jpg",
    link: "https://github.com/sanjamkhera/NBA-Database.git",
  },
  {
    id: 5,
    color: "from-violet-100 to-red-100",
    title: "Processor Simulation",
    desc: "The program employs an MLFQ scheduling policy with each CPU as a thread. The Scheduler initializes CPU threads, while the Dispatcher manages task availability, and tasks are executed sequentially by CPU threads, updating attributes before reinsertion or moving to the \"done\" area if incomplete.",
    img: "https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456_1280.jpg",
    link: "https://github.com/sanjamkhera/Processor-Simulation.git",
  },
];

const PortfolioPage = () => {
  const ref = useRef();


  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-white-100 to-green-100" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black items-start justify-center bg-white p-10 rounded-xl w-auto h-auto">
                  <h2 className="text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h2>
                  <div className="relative w-80 h-56 md:w-84 md:h-56 self-center">
                    <Image src={item.img} alt="" fill className="rounded-xl" />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-left flex items-center">
                    {item.desc}
                  </p>
                  <a href={item.link} className="flex justify-end" target="_blank" rel="noopener noreferrer">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-black text-white font-semibold rounded-lg">View Project</button>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="sm:text-4xl md:text-6xl">Lets work on a project!</h1>
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
          <Link href="/contact" passHref>
            <div className="w-20 h-20 md:w-36 md:h-36 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
              <button className="w-full h-full rounded-full flex items-center justify-center">
                Hire Me
              </button>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;