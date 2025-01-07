import Image from "next/image";
import { Button } from "../ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-color mt-32 pt-16 pb-20 relative">
      <div className="container">
        <div className="mb-12">
          <h2 className="font-bold text-[40px] max-md:text-[30px]">
            What are you waiting for?
          </h2>
          <p className="max-w-[550px] text-lg text-gray-200">
            Register now to get the best delivery experience for you and your
            clients in Iraq!
          </p>
        </div>
        <div className="flex gap-4 items-center mb-24 max-sm:flex-col">
          <input
            type="text"
            placeholder="Your email"
            className="bg-white py-2 px-8 rounded-3xl max-sm:w-full"
          />
          <Button className="rounded-3xl h-[40px] max-sm:w-full">
            register now
          </Button>
        </div>
        <div className="flex justify-between items-start max-lg:flex-col">
          <div>
            <div className="flex justify-between items-start max-w-[500px] max-lg:flex-col">
              <Image
                src={"/assets/logo.png"}
                alt="TANIT"
                width={100}
                height={50}
              />
              <div className="flex gap-24 mt-8 mb-12">
                <div>
                  <h3 className="mb-3">The company</h3>
                  <ul className="text-gray-300 flex flex-col gap-2 max-sm:text-xs">
                    <li>Who are we </li>
                    <li>Services</li>
                    <li>Jobs</li>
                    <li>Branches</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3">Help center</h3>
                  <ul className="text-gray-300 flex flex-col gap-2 max-sm:text-xs">
                    <li>Common questions</li>
                    <li>Contact us</li>
                    <li>Register as merchant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="flex rounded-3xl px-0 items-center w-52 gap-2 pl-1 py-1"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            >
              <p className="bg-white w-10 h-10 flex items-center justify-center primary-main-color rounded-full">
                <Instagram size={22} />
              </p>
              <p className="font-medium">Instagram</p>
            </div>
            <div
              className="flex rounded-3xl px-0 items-center w-52 gap-2 pl-1 py-1"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            >
              <p className="bg-white w-10 h-10 flex items-center justify-center primary-main-color rounded-full">
                <Facebook size={22} />
              </p>
              <p className="font-medium">Facebook</p>
            </div>
            <div
              className="flex rounded-3xl px-0 items-center w-52 gap-2 pl-1 py-1"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            >
              <p className="bg-white w-10 h-10 flex items-center justify-center primary-main-color rounded-full">
                <Linkedin size={22} />
              </p>
              <p className="font-medium">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 text-center text-gray-300 max-sm:text-xs max-sm:w-full">
        © 2024 Leader Express Delivery Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
