import Image from "next/image";
import Logo from "/public/images/fitLife-logo-500-200.svg";
import SocialIcons from "../SocialIcons";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-color-primary h-max lg:py-10 flex flex-col items-center">
      <div className="border-y-2 border-gray-400/25 lg:py-10 lg:px-2 flex items-center justify-between lg:w-5/6">
        <div>
          <Image src={Logo} alt="Logo" width={228} height={77} />
        </div>
        <div className="flex gap-10">
          <div className="lg:space-y-4">
            <p className="font-bold uppercase text-color-details lg:text-lg">
              conheça
            </p>
            <p className="text-white font-medium lg:text-lg">Planos</p>
            <p className="text-white font-medium lg:text-lg">Equipes</p>
            <p className="text-white font-medium lg:text-lg">Unidades</p>
          </div>
          <div className="lg:space-y-4">
            <p className="font-bold uppercase text-color-details lg:text-lg">
              veja também
            </p>
            <p className="text-white font-medium lg:text-lg">Contato</p>
            <p className="text-white font-medium lg:text-lg">Área do aluno</p>
            <p className="text-white font-medium lg:text-lg">Sobre nós</p>
          </div>
          <div className="lg:space-y-4">
            <p className="font-bold uppercase text-color-details lg:text-lg">
              saiba mais
            </p>
            <p className="text-white font-medium lg:text-lg">Contatos</p>
            <p className="text-white font-medium lg:text-lg">
              Trabalhe conosco
            </p>
          </div>
        </div>
        <div className="lg:space-y-4 text-center">
          <p className="font-bold uppercase text-color-details lg:text-lg">
            siga nos
          </p>
          <span className="flex items-center lg:gap-2">
            <SocialIcons icon={FaFacebookF} />
            <SocialIcons icon={FaInstagram} />
            <SocialIcons icon={FaYoutube} />
            <SocialIcons icon={FaSpotify} />
          </span>
        </div>
      </div>
      <div className="w-5/6 flex justify-between items-center text-white text-sm pt-2">
        <p>&copy; Todos os direitos reservados a Fit Life</p>
        <p>Empresas LDTech</p>
      </div>
    </footer>
  );
};

export default Footer;
