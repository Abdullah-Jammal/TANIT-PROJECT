import Marquee from "@/components/ui/marquee";
import { OurPartnersData } from "@/lib/data";
import Image from "next/image";

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure>
      <div className="flex w-[300px] max-md:w-[200px] max-md:h-12 items-center h-16 rounded-lg justify-center bg-white">
        <Image width={43} height={20} alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeCarousel() {
  return (
    <div className="relative flex h-[170px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {OurPartnersData.map((review, ind) => (
          <ReviewCard key={ind} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
