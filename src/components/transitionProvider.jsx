"use client"

// Import necessary libraries and components
import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";

// Define the TransitionProvider component
const TransitionProvider = ({ children }) => {

  // Get the current path name using the usePathname hook
  const pathName = usePathname();

  // Return the JSX for the component
  return (

    // AnimatePresence allows for animations on components as they mount and unmount
    <AnimatePresence mode="wait">

      {/* The key prop ensures the div re-renders when the path changes */}
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-50 to-green-100">

        {/* This motion.div animates a black screen appearing and disappearing */}
        <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40" animate={{ height: "0vh" }} exit={{ height: "140vh" }} transition={{ duration: 0.5, ease: "easeOut" }}/>

        {/* This motion.div fades in and out the current path name */}
        <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        
        {/* This motion.div animates a black screen appearing and disappearing */}
        <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40" initial={{ height: "140vh" }} animate={{ height: "0vh", transition: { delay: 0.5 } }}/>
        {/* Render the Navbar component */}
        <div className="h-24"><Navbar /></div>
        {/* Render the children passed to this component */}
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

// Export the TransitionProvider component as the default export of this module
export default TransitionProvider;