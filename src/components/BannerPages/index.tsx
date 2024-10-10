import { FaApple, FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from "../Navbar";
import SocialIcons from "../SocialIcons";

interface BannerProps {
  namePage: string;
}

const BannerPages = ({ namePage }: BannerProps) => {
  return (
    <section className="bg-bannerImage bg-cover flex flex-col items-center lg:gap-8 lg:h-screen ">
      <Navbar />
      <div className=" h-screen flex items-center justify-between w-4/5">
        <div className="flex gap-4  items-center justify-center">
          <h1 className="font-extrabold text-color-details text-7xl uppercase tracking-wide">
            {namePage}
          </h1>
        </div>
        <div>
          <div className="flex flex-col gap-3 text-white">
            <FaFacebook className="w-8 h-8 hover:text-color-details transition-all" />
            <FaInstagram className="w-8 h-8 hover:text-color-details transition-all" />
            <FaApple className="w-8 h-8 hover:text-color-details transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPages;
