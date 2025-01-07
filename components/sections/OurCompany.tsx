import { ourCompany } from "@/lib/data";

const OurCompany = () => {
  return (
    <div className="container mb-12">
      <p className="flex items-center justify-start gap-2 border-b-2 border-gray-500 pb-2 primary-main-color">
        <span className="w-2 h-2 flex bg-white rounded-full"></span>The
        company&apos;s philosophy
      </p>
      <div className="flex justify-between items-center mt-5 max-lg:flex-col max-lg:items-start">
        <div className="w-[420px] max-lg:w-[80%]">
          <h2 className="primary-main-color text-[50px] leading-tight mb-3 max-lg:text-[35px]">
            We bear the responsibility of developing the sector.
          </h2>
          <p className="text-color max-lg:text-sm">
            Elevate your brand with our comprehensive marketing solutions,
            including Digital Marketing, Content Creation, and Social Media
            Strategy. Enhance visibility through expert SEO and PPC management,{" "}
          </p>
        </div>
        <div
          className="flex flex-col w-72 max-lg:w-96 max-lg:flex-row max-lg:gap-8 max-sm:gap-3 max-lg:text-left 
        max-lg:flex-wrap"
        >
          {ourCompany.map((data) => (
            <div key={data.title} className="max-lg:w-40 max-lg:mt-4">
              <h3 className="text-[40px] font-bold max-sm:text-[30px]">
                {data.title}
              </h3>
              <span className="text-color max-sm:text-sm">
                {data.paragraph}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
