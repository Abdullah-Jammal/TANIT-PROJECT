import Title from "../shared/Title";

const AboutUs = () => {
  return (
    <div className="h-[60vh] flex items-center flex-col justify-center w-full gap-7 max-md:text-center myAbout">
      <Title title="About us" style="text-center text-3xl font-bold" />
      <p className="w-1/2 max-md:w-[90%]">
        Welcome to{" "}
        <span className="primary-main-color">Focus Marketing Solutions!</span>{" "}
        We&apos;re a creative team dedicated to driving your business forward
        with innovative marketing strategies. From digital marketing to social
        media management, we&apos;re here to help you succeed.{" "}
        <span className="primary-main-color">
          Let&apos;s build something extraordinary together.
        </span>
      </p>
      <button
        className="primary-main-color border-2 border-[#7d4283] py-2 px-10 max-sm:py-1
        max-sm:px-4 max-md:w-[80%] rounded-3xl"
      >
        Read more
      </button>
    </div>
  );
};

export default AboutUs;
