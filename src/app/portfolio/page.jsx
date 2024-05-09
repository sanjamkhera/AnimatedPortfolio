"use client";
// Importing necessary libraries and hooks
import { motion } from "framer-motion";
import Image from "next/image";


const items = [
  {
    id: 1,
    color: "from-red-100 to-indigo-100",
    title: "ED Fashion Online Store",
    desc: "A responsive animated design for a fashion website with integrated search, filtering, product comparison, and order tracking, built using HTML, JavaScript and CSS. ",
    img: "https://cdn.pixabay.com/photo/2020/09/20/04/28/delivery-5585969_960_720.jpg",
    link: "https://github.com/sanjamkhera/HCIEvaluationEDFashion.git",
    demo: "https://www.youtube.com/watch?v=RqN0GUtnFe4&t=1s&ab_channel=SanjamKhera",
  },
  {
    id: 2,
    color: "from-gray-200 to-yellow-100",
    title: "Warehouse Operations in C++",
    desc: "This program simulates back-end operations for a warehouse, focusing on order processing, shipping, penalties for late deliveries, workforce management and cost analysis.",
    img: "https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_1280.jpg",
    link: "https://github.com/sanjamkhera/Warehouse-Operations.git",
    demo: "https://www.youtube.com/watch?v=RqN0GUtnFe4&t=1s&ab_channel=SanjamKhera",
  },
  {
    id: 3,
    color: "from-indigo-100 to-orange-100",
    title: "Personal Messaging App in React",
    desc: "For my personal project, I used Terraform and GitHub Actions to orchestrate Docker container deployment, creating a seamless CI/CD pipeline for this Next.js app.",
    img: "https://cdn.pixabay.com/photo/2021/07/07/20/22/speech-balloons-6395236_1280.png",
    link: "https://github.com/sanjamkhera/Warehouse-Operations.git",
    demo: "https://www.youtube.com/watch?v=RqN0GUtnFe4&t=1s&ab_channel=SanjamKhera",
  },

  {
    id: 4,
    color: "from-yellow-100 to-red-100",
    title: "NBA Database in SQL",
    desc: "Implemented a relational database for an NBA season, converting 49,000 lines of raw data into normalized data across 12 tables. Also developed useful queries for data analysis.",
    img: "https://cdn.pixabay.com/photo/2017/08/03/19/39/people-2578102_960_720.jpg",
    link: "https://github.com/sanjamkhera/NBA-Database.git",
    demo: "https://www.youtube.com/watch?v=RqN0GUtnFe4&t=1s&ab_channel=SanjamKhera",
  },
  {
    id: 5,
    color: "from-orange-100 to-red-100",
    title: "Processor Simulation in C-Language",
    desc: "The program employs an MLFQ scheduling policy with each CPU as a thread. All tasks in the system are executed sequentially by CPU threads, before reinsertion or completion",
    img: "https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456_1280.jpg",
    link: "https://github.com/sanjamkhera/Processor-Simulation.git",
    demo: "https://www.youtube.com/watch?v=RqN0GUtnFe4&t=1s&ab_channel=SanjamKhera",
  },
  {
    id: 6,
    color: "from-red-100 to-gray-200",
    title: "CI/CD Pipeline using GitHub Actions",
    desc: "For my personal project, I used Terraform and GitHub Actions to orchestrate Docker container deployment, creating a seamless CI/CD pipeline for this Next.js app.",
    img: "https://cdn.pixabay.com/photo/2018/10/01/15/38/plan-3716541_960_720.jpg",
    link: "https://github.com/sanjamkhera/Warehouse-Operations.git",
    demo: "https://www.youtube.com/watch?v=RqN0GUtnFe4&t=1s&ab_channel=SanjamKhera",
  },
];

const PortfolioPage = () => {


  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      <div className='flex flex-col items-center justify-center pb-24'>

        <div className={`w-4/5 md:w-3/5 lg:w-4/5 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-24`} >
          {items.map((item) => (
            <div className={`flex items-center rounded-2xl justify-center bg-gradient-to-b ${item.color}`} key={item.id}>
              <div className="w-full h-full flex flex-col gap-8 text-black items-center justify-center p-6 rounded-xl">
                <h2 className="text-xl font-semibold self-start">{item.title}</h2>
                <div className="relative w-80 h-56 self-center">
                  <Image src={item.img} alt="" fill className="rounded-xl" />
                </div>
                <p className="w-full text-left flex items-center">{item.desc}</p>
                <div className="flex flex-row gap-10 self-start">
                  <a href={item.link} className="flex justify-end" target="_blank" rel="noopener noreferrer">
                    <button className="p-2 text-sm md:text-md lg:text-lg bg-black text-white font-semibold rounded-lg">Source Code</button>
                  </a>
                  <a href={item.demo} className="flex justify-end" target="_blank" rel="noopener noreferrer">
                    <button className="p-2 text-sm md:text-md lg:text-lg bg-black text-white font-semibold rounded-lg">View Demo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>

  );
};

export default PortfolioPage;