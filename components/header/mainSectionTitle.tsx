"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const MainSectionTitle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const childVariants2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.1, delay: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-[500px]"
    >
      <motion.h1
        className="max-w-[500px] text-[45px] leading-[45px] max-lg:text-center max-lg:text-[35px]"
        variants={childVariants}
      >
        Transform your business with our{" "}
        <span className="primary-text-color">
          Creative Marketing Solutions!
        </span>
      </motion.h1>
      <motion.p
        className="max-w-[450px] text-sm max-lg:text-xs max-sm:mt-6 mt-3 max-lg:text-center max-lg:mt-12"
        variants={childVariants}
      >
        Welcome to Focus Marketing Solutions! We&apos;re a creative team
        dedicated to driving your business forward with innovative marketing
        strategies. From digital marketing to social media management,
        we&apos;re here to help you succeed. Let&apos;s build something
        extraordinary together
      </motion.p>
      <motion.div
        className="mt-7 mb-16 flex gap-4 max-lg:flex-col"
        variants={buttonVariants}
      >
        <motion.div variants={buttonVariants}>
          <Button className="bg-primary-color rounded-3xl w-24 h-10 max-lg:w-full hover:bg-purple-500">
            Join us
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Button className="bg-black border-2 rounded-3xl w-32 h-10 max-lg:w-full">
            Contact us
          </Button>
        </motion.div>
      </motion.div>
      <motion.div variants={childVariants2}>
        <Image
          className="max-lg:hidden pt-4"
          src="/assets/main/header3.png"
          alt="Main Image"
          width={460}
          height={150}
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 1) 100%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default MainSectionTitle;
