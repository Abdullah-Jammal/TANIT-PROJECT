"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
const NavButtons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex gap-4 max-lg:hidden"
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.button
        className="bg-black border-2 rounded-3xl w-28 h-10"
        variants={childVariants}
      >
        Contact us
      </motion.button>
      <motion.button
        className="bg-primary-color rounded-3xl w-24 h-10 hover:bg-purple-500"
        variants={childVariants}
      >
        Join us
      </motion.button>
    </motion.div>
  );
};

export default NavButtons;
