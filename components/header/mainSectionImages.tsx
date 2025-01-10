"use client";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
const MainSectionImages = () => {
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
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      className="flex flex-col gap-5 max-lg:hidden"
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div variants={childVariants}>
        <Image
          src={"/assets/main/header.png"}
          alt="Image"
          width={380}
          height={200}
        />
      </motion.div>
      <motion.div variants={childVariants}>
        <Image
          src={"/assets/main/header2.png"}
          alt="Image"
          width={230}
          height={200}
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 1) 100%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default MainSectionImages;
