"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    path: "/1.svg",
    id: "1",
  },
  {
    path: "/2.svg",
    id: "2",
  },
  {
    path: "/3.svg",
    id: "3",
  },
  {
    path: "/4.svg",
    id: "4",
  },
  {
    path: "/5.svg",
    id: "5",
  },
  {
    path: "/6.svg",
    id: "6",
  },
  {
    path: "/7.svg",
    id: "7",
  },
  {
    path: "/8.svg",
    id: "8",
  },
];

const GaleryGym = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex items-center justify-center flex-wrap w-5/6">
      {images.map((img) => (
        <Image
          key={img.id}
          src={img.path}
          alt="foto academia"
          className="md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[250px] xl:w-[300px] xl:h-[300px]"
          width={140}
          height={140}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="400"
        />
      ))}
    </div>
  );
};

export default GaleryGym;
