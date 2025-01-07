/* eslint-disable @next/next/no-img-element */
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    img: "/assets/partners/partner1.png",
  },
  {
    img: "/assets/partners/partner2.png",
  },
  {
    img: "/assets/partners/partner3.png",
  },
  {
    img: "/assets/partners/partner4.png",
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure>
      <div className="flex w-[300px] items-center h-16 rounded-lg justify-center bg-white">
        <img className="w-12" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeCarousel() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviews.map((review, ind) => (
          <ReviewCard key={ind} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
