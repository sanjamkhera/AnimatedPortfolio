"use client"

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react";

const AboutPage = () => {

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
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lag:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIO</h1>
            {/* BIOGRAPHY DESC*/}
            <p className="text-lg text-justify">Engineer with a diverse background spanning software engineering, project management, and engineering design. Recognized for delivering innovative solutions,problem solving and leading teams to success.</p>
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

              <h3 className="w-full font-bold text-xl">Design</h3>
              <div className='w-full flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>AutoCAD</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Inventor</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>SolidWorks</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>On-Shape</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Figma</div>
              </div>

              <h3 className="font-bold text-xl">Development and Service</h3>
              <div className='w-full flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Git</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>npm</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>VS Code</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Xcode</div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>CI/CD GitHub Actions</div>
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
          <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
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
              {/* Subtitles */}
              <div className='flex justify-between mb-10'>
                <h2 className='font-bold text-l'>Mechanical Engineering</h2>
                <h2 className='font-bold text-l'>Software Engineering</h2>
              </div>
              {/* EXPERIENCE LIST ITEM ONE*/}
              <div className='flex justify-between h-64'>
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Machine Designer</div>
                  {/* JOB Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Jan 2022 - May 2022</div>
                  {/* JOB DESCRIPTION */}
                  <div className='p-3 text-sm italic'>
                    Help design a hydraulic lift system for a 75000 lbs farm seeding drill using On-Shape for 3D modelling and version control.
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>K-HART Industries</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>
              {/* EXPERIENCE LIST ITEM TWO*/}
              <div className='flex justify-between h-72'>
                {/* LEFT */}
                <div className='w-1/3'>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>DevOps</div>
                  {/* JOB Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Sep 2020 - Apr 2024</div>
                  {/* JOB DESCRIPTION */}
                  <div className='p-3 text-sm italic'>
                    <div>
                      Executed shell scripts, used Git for version control, managed containers and dependencies, configured virtual machines and cloud servers (AWS/Azure), and automated CI/CD work-flows for personal projects.
                    </div>
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>University of Manitoba</div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM THREE*/}
              <div className='flex justify-between h-64'>
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Equipment Designer</div>
                  {/* JOB Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Jan 2015 - Oct 2021</div>
                  {/* JOB DESCRIPTION */}
                  <div className='p-3 text-sm italic'>
                    Designed industrial silencers from various materials, and automated tasks in AutoCAD / Inventor.
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>VAW Systems</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>
              {/* EXPERIENCE LIST ITEM FOUR*/}
              <div className='flex justify-between h-72'>
                {/* LEFT */}
                <div className='w-1/3'>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Software Engineering</div>
                  {/* JOB Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Sep 2020 - Apr 2024</div>
                  {/* JOB DESCRIPTION */}
                  <div className='p-3 text-sm italic'>
                    <div>
                      Covered a wide range of topics including programming fundamentals, data structures, algorithms, databases, human-computer interaction, operating systems, object-orientation, and more.
                    </div>
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>University of Manitoba</div>
                </div>

              </div>
              {/* EXPERIENCE LIST ITEM Five*/}
              <div className='flex justify-between h-64'>
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Controls Technician</div>
                  {/* JOB Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>May 2014 - Aug 2014</div>
                  {/* JOB DESCRIPTION */}
                  <div className='p-3 text-sm italic'>
                    Created wiring layouts and installation packages for electricians. Developed sequence of operations for programmers.
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Mikkelsen Coward</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>
            </motion.div>
          </div>
          {/* BLOG CONTAINER */}
          <div className='flex flex-col gap-12 justify-center' ref={blogRef}>
            {/* BLOG TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isBlogRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">
              PERSONAL BLOG
            </motion.h1>
            <div className="container text-justify bg-white p-4 rounded-lg">
              <h3 className="text-l font-bold">Computer Science, University of Manitoba</h3>
              <p className="text-sm mt-2">In first year, We were introduced to the fundamentals of programming, algorithms, and data structures. I spent countless hours in the lab, debugging code and learning the intricacies of Python and Java.</p>
              <p className="text-sm mt-2">In second year, we delved deeper. We studied advanced topics like operating systems, computer networks, and database systems. We also started working on his own projects, applying the theoretical knowledge he gained in practical scenarios.</p>
              <p className="text-sm mt-2">By third year, We were well-versed in several programming languages and had a solid understanding of software development principles. We took elective courses in Artificial Intelligence and Machine Learning, which sparked his interest in data science.</p>
              <p className="text-sm mt-2">In final year, We worked on various project as showcased in this portfolio.</p>
              <p className="text-sm mt-2">Throughout the four years at the University of Manitoba, I not only acquired a strong foundation in Computer Science but also developed critical thinking and problem-solving skills that prepared him for the tech industry.</p>
            </div>
            <div className="container text-justify bg-white p-4 rounded-lg">
              <h3 className="text-l font-bold">Mechanical Engineering Experience</h3>
              <p className="text-sm mt-2">My journey in Mechanical Engineering began at Red River College, where I pursued a Mechanical Engineering Technology program.</p>
              <p className="text-sm mt-2">My first professional experience was as a Controls Technician at Mikkelsen Coward, where I created wiring layouts and installation packages for electricians and developed sequences of operations for programmers.</p>
              <p className="text-sm mt-2">I then moved on to VAW Systems as an Equipment Designer. Here, I worked with Project Managers and customers to interpret specifications, used 3D modeling tools like Inventor for design documentation, and created manufacturing packages using AutoCAD. I also took the initiative to automate repetitive tasks and worked on standardizing and improving existing product designs.</p>
              <p className="text-sm mt-2">Most recently, I worked as a Mechanical Designer at K-HART Industries. I was part of the team that developed hydraulic systems for farm equipment and created macros for 3D modeling in On-Shape. I also managed version control using On-Shapes in-built release management and used tools like Sim-Solid for stress analysis and Odoo for operational management.</p>
              <p className="text-sm mt-2">Throughout my career, I have worked on numerous projects, including the design of a hydraulic lift system for a farm seeding drill and the creation of drawing packages for over 1200 custom industrial silencers. I have also reverse-engineered a hydraulic bending machine and designed an industrial-sized bucket elevator for a farming application.</p>
            </div>
            <div className="container text-justify bg-white p-4 rounded-lg">
              <h3 className="text-l font-bold">Moving to Vancouver</h3>
              <p className="text-sm mt-2">Moving from Winnipeg, Manitoba, where I lived for over 12 years, to Vancouver was a significant transition in my life.</p>
              <p className="text-sm mt-2">The move brought with it a mix of struggles and opportunities that are common for many students. Adapting to a new city meant finding my way around, adjusting to a different pace of life, and building a new social circle.</p>
              <p className="text-sm mt-2">The weather in Vancouver, with its mild winters and beautiful summers, offered a stark contrast to the colder climate I was used to in Winnipeg. It was refreshing to experience the lush greenery and outdoor activities that Vancouver had to offer, including my passions for mountain biking and climbing.</p>
              <p className="text-sm mt-2">Speaking of climbing, my recent accomplishment of climbing The Squamish Chief ten times. This challenge, fueled by determination and intensity, was not just about physical fitness but also about pushing my own limits and embracing a spiritual connection to the journey.</p>
              <p className="text-sm mt-2">The Squamish Chief itself stands as a monumental symbol of challenge and natural beauty. Its massive granite structure attracts climbers globally, offering a unique experience that tests both skill and courage. Climbing its peaks was not just about conquering a physical obstacle but also about mastering my own inner hurdles, drawing strength from the symbolism and history that surrounded this remarkable natural wonder.</p>
              <p className="text-sm mt-2">My move to Vancouver is a pivotal moment in my life, filled with challenges, opportunities, and personal growth. Embracing the outdoors, pursuing my passions, and undertaking challenges like climbing The Squamish Chief have all contributed to shaping my journey and my experiences in this vibrant city.</p>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/3'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;