import Image from "next/image";
import { Button } from "../ui/button";

const MainSection = () => {
  return (
    <main className="container flex items-center justify-between h-[100vh] max-lg:justify-center">
      <div>
        <h1 className="max-w-[500px] text-[45px] leading-[45px] max-lg:text-center max-lg:text-[35px]">
          Transform your business with our{" "}
          <span className="primary-text-color">
            Creative Marketing Solutions!
          </span>
        </h1>
        <p className="max-w-[450px] text-sm max-lg:text-xs max-sm:mt-6 mt-3 max-lg:text-center max-lg:mt-12">
          Welcome to Focus Marketing Solutions! We&apos;re a creative team
          dedicated to driving your business forward with innovative marketing
          strategies. From digital marketing to social media management,
          we&apos;re here to help you succeed. Let&apos;s build something
          extraordinary together
        </p>
        <div className="mt-7 mb-16 flex gap-4 max-lg:flex-col">
          <Button className="bg-primary-color rounded-3xl w-24 h-10 max-lg:w-full hover:bg-purple-500">
            Join us
          </Button>
          <Button className="bg-black border-2 rounded-3xl w-32 h-10 max-lg:w-full">
            Contact us
          </Button>
        </div>
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
      </div>
      <div className="flex flex-col gap-5 max-lg:hidden">
        <div>
          <Image
            src={"/assets/main/header.png"}
            alt="Image"
            width={380}
            height={200}
          />
        </div>
        <div>
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
        </div>
      </div>
    </main>
  );
};

export default MainSection;
