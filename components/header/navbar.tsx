"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavbarLinks } from "@/lib/data";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Navbar = () => {
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
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="max-md:hidden">
      <motion.ul
        className="flex items-center gap-12 text-sm"
        ref={ref}
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {NavbarLinks.map((data) => (
          <motion.li
            key={data.li}
            whileHover={{ scale: [null, 1.2, 1.1], color: "#c267cc" }}
            transition={{ duration: 0.2 }}
            variants={childVariants}
          >
            <Link href={data.link}>{data.li}</Link>
            {data.li === "Jobs" && (
              <span className="bg-primary-color rounded-xl p-[2.5px] text-xs ml-1">
                12
              </span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
