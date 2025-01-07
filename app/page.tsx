import AboutUs from "@/components/sections/AboutUs";
import MainSection from "@/components/sections/MainSection";
import News from "@/components/sections/News";
import OurCharts from "@/components/sections/OurCharts";
import OurClientOpenions from "@/components/sections/OurClientOpenions";
import OurCompany from "@/components/sections/OurCompany";
import OurPartners from "@/components/sections/OurPartners";
import OurServices from "@/components/sections/OurServices";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main>
      <MainSection />
      <OurPartners />
      <AboutUs />
      <OurServices />
      <OurCompany />
      <OurCharts />
      <News />
      <Pricing />
      <OurClientOpenions />
    </main>
  );
}
