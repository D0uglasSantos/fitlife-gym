import Button from "../Button";
import Navbar from "../Navbar";

interface BannerProps {
  namePage: string;
}

const BannerPages = ({ namePage }: BannerProps) => {
  return (
    <section className="bg-bannerImage bg-cover flex flex-col items-center lg:gap-8 lg:h-screen ">
      <Navbar />
      <div className="flex justify-between w-4/5">
        <div className="flex flex-col gap-8 w-[54%]">
          <h1 className="font-extrabold text-white text-6xl uppercase">
            {namePage}
          </h1>
        </div>
        social icons
      </div>
    </section>
  );
};

export default BannerPages;
