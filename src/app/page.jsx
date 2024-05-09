"use client"

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react";

const Homepage = () => {

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const blogRef = useRef();
  const isBlogRefInView = useInView(blogRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0 }}>


      {/* CONTAINER */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-24 flex flex-col gap-24 md:gap-32 lg:gap-36 lg:w-2/3'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">Portfolio Website</h1>
            {/* BIOGRAPHY DESC*/}
            <p className="text-lg text-justify">This portfolio website showcases my skills, work history, and projects. I used various modern technologies, i.e. React.js, Framer Motion, Tailwind CSS and Next.js for this website.</p>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className='w-full flex gap-4 flex-wrap'>


              <h3 className="w-full font-bold text-xl">Languages</h3>
              <div className='w-full flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Java</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>C++</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>C</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Python</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Swift</div>
              </div>

              <h3 className="w-full font-bold text-xl">Libraries</h3>
              <div className='w-full flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next.js</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Framer Motion</div>
              </div>


              <h3 className="w-full font-bold text-xl">Frameworks and Technologies</h3>
              <div className='w-full flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>AWS SDK</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Dockers</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Azure</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Unix / Linux</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>OpenShift</div>
              </div>
              <h3 className="font-bold text-xl">Development and Service</h3>
              <div className='w-full flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Git</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>npm</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>VS Code</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Xcode</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>CI/CD GitHub Actions</div>
              </div>

              <h3 className="w-full font-bold text-xl">Design</h3>
              <div className='w-full flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>AutoCAD</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Inventor</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>SolidWorks</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>On-Shape</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Figma</div>
              </div>

            </motion.div>
            {/* BIOGRAPHY SCROLL SVG*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className='flex flex-col gap-8 justify-center' ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=''>

              {/* EXPERIENCE LIST ITEM ONE*/}
              <div className='flex flex-col justify-between pb-12 '>
                {/* JOB TITLE */}
                <div className='bg-white w-2/3 p-3 font-semibold rounded-b-lg rounded-s-lg'>Machine Designer at K-HART Industries</div>
                {/* JOB Date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>Jan 2022 - May 2022</div>
                {/* JOB DESCRIPTION */}
                <div className='p-3 text-sm italic'>

                  <li>Help design a hydraulic lift system.</li>
                  <li>75000 lbs and 75ft wide farm seeding drill.</li>
                  <li>Using On-Shape for 3D modelling and version control.</li>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM TWO*/}
              <div className='flex flex-col justify-between pb-12'>
                {/* JOB TITLE */}
                <div className='bg-white w-2/3 p-3 font-semibold rounded-b-lg rounded-s-lg'>Software Engineering at University of Manitoba</div>
                {/* JOB Date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>Sep 2020 - Apr 2024</div>
                {/* JOB DESCRIPTION */}
                <div className='p-3 text-sm italic justify-normal'>
                  <div>
                    <li>Completed projects that covered a wide range of topics such as:</li>
                    <li className="pl-6">Software design and architecture via Object Orientation.</li>
                    <li className="pl-6">Data structures and algorithms.</li>
                    <li className="pl-6">Database creation and manipulation via Databases.</li>
                    <li className="pl-6">Human-computer interaction via Web development.</li>
                    <li className="pl-6">Operating systems.</li>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM THREE*/}
              <div className='flex flex-col justify-between pb-12'>
                {/* JOB TITLE */}
                <div className='bg-white w-2/3 p-3 font-semibold rounded-b-lg rounded-s-lg'>DevOps Experience at University of Manitoba</div>
                {/* JOB Date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>Sep 2020 - Apr 2024</div>
                {/* JOB DESCRIPTION */}
                <div className='p-3 text-sm italic justify-normal'>
                  <div>
                    <li>Wrote and executed shell scripts to manipulate files.</li>
                    <li>Used docker to managed containers and dependencies.</li>
                    <li>Configured virtual machines and cloud servers (AWS/Azure).</li>
                    <li>Automated CI/CD work-flows for academic and personal projects.</li>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM FOUR*/}
              <div className='flex flex-col justify-between pb-12'>
                {/* JOB TITLE */}
                <div className='bg-white w-2/3 p-3 font-semibold rounded-b-lg rounded-s-lg'>Equipment Designer at VAW Systems</div>
                {/* JOB Date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>Jan 2015 - Oct 2021</div>
                {/* JOB DESCRIPTION */}
                <div className='p-3 text-sm italic'>
                  <li> Designed industrial silencers from various materials </li>
                  <li> Automated tasks in AutoCAD / Inventor.</li>
                </div>
              </div>


              {/* EXPERIENCE LIST ITEM FIVE*/}
              <div className='flex flex-col justify-between'>
                {/* JOB TITLE */}
                <div className='bg-white w-2/3 p-3 font-semibold rounded-b-lg rounded-s-lg'>Controls Technician at Mikkelsen Coward</div>
                {/* JOB Date */}
                <div className='p-3 text-red-400 text-sm font-semibold'>May 2014 - Aug 2014</div>
                {/* JOB DESCRIPTION */}
                <div className='p-3 text-sm italic'>
                  <li>Created wiring layouts and installation packages for electricians.</li>
                  <li>Developed sequence of operations for programmers.</li>
                </div>
              </div>
            </motion.div>
          </div>
          {/* BLOG CONTAINER */}
          <div className='flex flex-col gap-6 justify-center' ref={blogRef}>
            {/* BLOG TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isBlogRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">
              PERSONAL BLOG
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isBlogRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}>

              <div className="container text-justify bg-white p-4 mb-12 rounded-lg">
                <h3 className="text-l font-bold">Computer Science, University of Manitoba</h3>
                <p className="text-sm mt-2">During the first year, we were introduced to the fundamentals of programming, algorithms, and data structures. I spent countless hours in the lab, debugging code and learning the intricacies of Python and Java.</p>
                <p className="text-sm mt-2">In second year, we delved deeper into advanced topics like operating systems, computer networks, and database management systems. We  started working on bigger projects, applying the theoretical knowledge gained during curriculum.</p>
                <p className="text-sm mt-2">By third year, We were well-versed in several programming languages and had a solid understanding of software development principles. I took elective courses in Artificial Intelligence and Machine Learning, which sparked his interest in data science.</p>
                <p className="text-sm mt-2">In final year, We worked on various project as showcased in this portfolio.</p>
                <p className="text-sm mt-2">Throughout the four years at the University of Manitoba, I  acquired a strong foundation in Computer Science and developed critical thinking and problem-solving skills that prepared me today's ever changing tech industry.</p>
              </div>
              <div className="container text-justify bg-white p-4 mb-12 rounded-lg">
                <h3 className="text-l font-bold">Mechanical Engineering Experience</h3>
                <p className="text-sm mt-2">My journey in Mechanical Engineering began at Red River College, where I pursued a Mechanical Engineering Technology program.</p>
                <p className="text-sm mt-2">My first professional experience was as a Controls Technician at Mikkelsen Coward, where I created wiring layouts and installation packages for electricians and developed sequences of operations for programmers.</p>
                <p className="text-sm mt-2">I then moved on to VAW Systems as an Equipment Designer. Here, I worked with Project Managers and customers to interpret specifications, used 3D modeling tools like Inventor for design documentation, and created manufacturing packages using AutoCAD. I took the initiative to automate repetitive tasks and worked on standardizing and improving existing product designs.</p>
                <p className="text-sm mt-2">Most recently, I worked as a Mechanical Designer at K-HART Industries. I was part of the team that developed hydraulic systems for farm equipment and created macros for 3D modeling in On-Shape. I managed version control using On-Shapes in-built release management, used tools like Sim-Solid for stress analysis and Odoo for ERP and management.</p>
              </div>
              <div className="container text-justify bg-white p-4 mb-12 rounded-lg">
                <h3 className="text-l font-bold">Moving to Vancouver</h3>
                <p className="text-sm mt-2">Moving from Winnipeg, Manitoba, where I lived for over 12 years, to Vancouver was a significant transition in my life.</p>
                <p className="text-sm mt-2">The move brought with it a mix of struggles and opportunities that are common for many students. Adapting to a new city meant finding my way around, adjusting to a different pace of life, and building a new social circle.</p>
                <p className="text-sm mt-2">The weather in Vancouver, with its mild winters and beautiful summers, offered a contrast to the colder climate in Winnipeg. It was refreshing to experience the lush greenery and outdoor activities that Vancouver had to offer, including my passions for mountain biking and climbing.</p>
                <p className="text-sm mt-2">Speaking of climbing, I recently climbed "The Squamish Chief" ten times. This challenge, fueled by determination and intensity, was not just about physical fitness but also about pushing my own limits and embracing a spiritual connection to the journey.</p>
                <p className="text-sm mt-2">The Squamish Chief itself stands as a monumental symbol of challenge and natural beauty. Its massive granite structure attracts climbers globally, offering a unique experience that tests both skill and courage. Climbing its peaks was not just about conquering a physical obstacle but also about mastering my own inner hurdles, drawing strength from the symbolism and history that surrounded this remarkable natural wonder.</p>
                <p className="text-sm mt-2">My move to Vancouver is a pivotal moment in my life, filled with challenges, opportunities, and personal growth. Embracing the outdoors, pursuing my passions, and undertaking challenges like climbing The Squamish Chief have all contributed to shaping my journey and my experiences in this vibrant city.</p>
              </div>
            </motion.div>
            {/* BIOGRAPHY SCROLL SVG*/}
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/2 sticky top-0 z-30 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
