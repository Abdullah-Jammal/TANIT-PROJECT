"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Logo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={childVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Image src="/assets/logo.png" alt="LOGO" width={100} height={20} />
    </motion.div>
  );
};

export default Logo;
