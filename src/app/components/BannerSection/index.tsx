import Image from "next/image";
import logo from "/public/fitLife-logo-500-200.svg";
import bannerMobile from "/public/fit-life-banner-mobile.svg";
import bannerDesktop from "/public/main-banner-desktop.svg";
import Button from "../Button";

const BannerSection = () => {
  return (
    <section className="bg-color-primary h-max w-full py-10 px-4 flex flex-col items-center max-lg:flex max-lg:justify-center max-lg:items-center">
      <div className="w-8/12 flex items-center justify-center mb-4 md:justify-start">
        <Image
          src={logo}
          alt="logo"
          className=" w-[180px] h-[80px] md:w-[250px] md:h-[100px]"
        />
      </div>
      <div className="xl:w-8/12">
        <Image
          src={bannerMobile}
          alt="banner Mobile"
          className="rounded-3xl md:hidden"
        />
        <Image
          src={bannerDesktop}
          alt="banner Desktop"
          className=" hidden rounded-3xl md:flex"
        />
      </div>
      <div className="-mt-11">
        <Button
          bgColor="bg-color-details"
          borderRadius="rounded-lg"
          paddingX="px-8"
          paddingY="py-4"
          font="font-bold"
          text="text-sm"
          hover="hover:text-green-900"
          textColor="text-white"
        >
          MATRICULE-SE AQUI
        </Button>
      </div>
    </section>
  );
};

export default BannerSection;
