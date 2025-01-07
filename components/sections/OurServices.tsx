import Title from "../shared/Title";
import Image from "next/image";
import { ourServicesData } from "@/lib/data";

const OurServices = () => {
  return (
    <div className="container">
      <Title title="Our services" />
      <p className="text-center text-color mb-16 mt-2">
        ransforming your online presence with innovative digital strategies
      </p>
      <div>
        <div className="flex justify-around items-center mb-20 max-w-[1000px] mx-auto flex-wrap gap-12">
          {ourServicesData.map((data) => (
            <div
              className="flex flex-col justify-center items-center w-[30%]"
              key={data.img}
            >
              <div className="bg-white w-28 h-28 rounded-md flex justify-center items-center">
                <p className="bg-primary-color w-24 h-24 rounded-full flex justify-center items-center">
                  <Image
                    src={data.img}
                    alt="Video Making"
                    width={50}
                    height={40}
                  />
                </p>
              </div>
              <h3 className="font-bold mt-2">{data.title}</h3>
              <p className="text-color text-xs text-center w-36">
                {data.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
