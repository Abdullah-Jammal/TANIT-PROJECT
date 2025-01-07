"use client";
import Title from "../shared/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { data } from "@/lib/data";

const OurClientOpinions = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalItems = Math.ceil(data.length / 2); // 3 bullets

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    console.log("Current Index updated:", currentIndex);
  }, [currentIndex]);

  return (
    <div className="bg-primary-color h-[80vh] pt-20">
      <div className="container">
        <Title title="Our clients opinions" />
        <div className="mt-20">
          <Carousel className="w-full">
            <CarouselContent>
              {data.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="max-w-[416px] border-none">
                      <CardContent className="bg-black rounded-xl p-6">
                        <div>
                          <Image
                            src={testimonial.img}
                            alt="AVATAR"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <span className="text-xs font-bold text-white">
                            {testimonial.title}
                          </span>
                        </div>
                        <p className="text-gray-200 max-w-[300px]">
                          {testimonial.paragraph}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleChange(index)} // Change to a specific index on bullet click
                className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientOpinions;
