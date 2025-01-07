"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex items-center gap-12 text-sm">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About us</Link>
        </li>
        <li>
          <Link href={"/"}>Services</Link>
        </li>
        <li>
          <Link href={"/"}>Branches</Link>
        </li>
        <li>
          <Link href={"/"}>
            Jobs{" "}
            <span className="bg-primary-color rounded-xl p-1 text-xs">12</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
