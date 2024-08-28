import Image from "next/image";
import Logo from "/public/fitLife-logo-500-200.svg";
import SocialIcons from "../SocialIcons";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-color-primary h-max py-12 flex flex-col items-center justify-center space-y-2 ">
      <div className="w-10/12 border-b-2 flex items-center justify-center py-1">
        <Image src={Logo} alt="Logo" className="w-52 h-20 md:w-56 md:h-24" />
      </div>
      <div className=" w-10/12 text-center space-y-5 border-b-2 py-5">
        <h1 className="text-sm text-white md:text-xl">Siga-nos</h1>
        <div className="flex items-center justify-center gap-2">
          <SocialIcons icon={FaFacebookF} />
          <SocialIcons icon={FaInstagram} />
          <SocialIcons icon={FaYoutube} />
          <SocialIcons icon={FaTiktok} />
          <SocialIcons icon={FaSpotify} />
          <SocialIcons icon={FaSnapchatGhost} />
        </div>
      </div>
      <div className="text-center w-10/12 space-y-3 py-5">
        <p className="text-zinc-400 text-xs md:text-sm">
          *Consulte as condições promocionais e regulamentos na
          página:fitlfe.com.br/contratos
        </p>
        <p className="text-zinc-400 text-[8px] md:text-[10px]">
          faleconosco@fitlife.com
        </p>
        <p className="text-zinc-400 text-xs md:text-sm">CNPJ: 48.122.679/0001-18</p>
      </div>
    </footer>
  );
};

export default Footer;
