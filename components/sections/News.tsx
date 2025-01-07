import Title from "../shared/Title";
import Image from "next/image";
import Company_Contracts from "../shared/Company_Contracts";
import { newsData } from "@/lib/data";

const News = () => {
  return (
    <div className="container mt-20 mb-12">
      <div className="flex justify-between items-center mb-16">
        <Title title="News" />
        <button className="bg-primary-color p-2 rounded-3xl w-40 max-lg:hidden">
          View all news
        </button>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-12 max-lg:items-start">
        <div>
          <Image
            src={"/assets/news/Image (2).png"}
            alt="NEWS"
            width={500}
            height={500}
          />
          <Company_Contracts />
          <h2 className="font-bold text-2xl max-w-[480px] my-4">
            We specialize in fostering effective partnerships with supportive
            companies to drive mutual success.
          </h2>
          <p className="text-color max-w-[550px]">
            We are committed to building effective partnerships with supporting
            companies, contributing to the advancement, development, and
            expansion of the sector through diverse capabilities, expertise, and
            technological innovation.
          </p>
        </div>
        <div className="flex flex-col w-[400px] max-md:w-[90%] gap-4">
          {newsData.map((data) => (
            <div
              className="flex items-center gap-5 w-72 max-sm:w-full"
              key={data.img}
            >
              <Image src={data.img} alt="" width={170} height={200} />
              <div>
                <p className="font-bold max-sm:text-sm">{data.title}</p>
                <Company_Contracts />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
