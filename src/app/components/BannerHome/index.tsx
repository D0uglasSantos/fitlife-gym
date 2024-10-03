import Image from "next/image";
import Button from "../Button";
import Navbar from "../Navbar";
import { FaFacebook, FaInstagram, FaApple } from "react-icons/fa";

const BannerHome = () => {
  return (
    <section className="bg-bannerImage bg-cover flex flex-col items-center justify-center lg:gap-8 lg:h-screen ">
      <Navbar />
      <div className="flex justify-between items-center w-4/5">
        <div className="flex flex-col gap-20 w-[54%]">
          <h1 className="font-extrabold text-white text-6xl uppercase">
            suaaaa{" "}
            <span className="font-extrabold text-color-details">
              melhor versão
            </span>{" "}
            começa aqui! vem ser{" "}
            <span className="font-extrabold text-color-details">fit life</span>
          </h1>
          <div className="w-max">
            <Button
              bgColor="bg-color-details"
              borderRadius="rounded-lg"
              font="font-bold"
              hover="hover:bg-[#008645] hover:shadow-md"
              paddingX="px-6"
              paddingY="py-4"
              textColor="text-white"
            >
              matricule-se aqui
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white">
          <FaFacebook className="w-8 h-8 hover:text-color-details transition-all" />
          <FaInstagram className="w-8 h-8 hover:text-color-details transition-all" />
          <FaApple className="w-8 h-8 hover:text-color-details transition-all" />
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
