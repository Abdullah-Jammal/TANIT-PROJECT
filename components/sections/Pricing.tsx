import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  return (
    <div
      className="container mb-12 mt-24 flex justify-between items-start gap-4 max-lg:flex-col
    max-lg:gap-12"
    >
      <div className="w-[500px] max-md:w-full">
        <h2 className="text-[55px] leading-tight mb-4 w-[450px] max-md:w-full max-md:text-[40px] max-sm:text-[30px] font-bold">
          Simple pricing for your Business
        </h2>
        <p className="text-color">
          We have several powerful plans to showcase your business and get
          discovered as a creative entrepreneurs. Everything you need.
        </p>
      </div>
      <div className="w-[500px] max-md:w-full">
        <Accordion type="single" collapsible value="item-3">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#1A1A1A] primary-main-color text-2xl px-3">
              Intro
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-[#1A1A1A] primary-main-color text-2xl px-3">
              Base
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-[#1A1A1A] primary-main-color text-2xl px-3">
              <p>
                Pro{" "}
                <span className="bg-white text-xs py-2 px-3 rounded-md ml-2">
                  save 40$
                </span>
              </p>
            </AccordionTrigger>
            <AccordionContent className="bg-primary-color px-5 py-3 rounded-md">
              <p className="w-96 max-md:w-full max-sm:text-xs">
                Pro account gives you freedom with uploading HD videos and can
                also meet all your business needs apasih kamu
              </p>
              <div className="flex items-start justify-between mt-4">
                <p>
                  <span className="font-bold text-lg">123$</span> / month
                </p>
                <button className="bg-white font-medium px-4 py-2 text-black rounded-xl">
                  Try 1 month
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-[#1A1A1A] primary-main-color text-2xl px-3">
              Enterprise
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Pricing;
