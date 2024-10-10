import BannerPages from "../../components/BannerPages";
import Footer from "@/components/Footer";
import Logo from "../../../public/images/fitLife-logo-500-200.svg"
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import Button from "@/components/Button";
interface ContatoProps {}

const Contato = ({}: ContatoProps) => {
  return (
    <section>
      <BannerPages namePage="Contato" />
      <div className="bg-bgContato bg-no-repeat bg-cover flex flex-col items-center gap-10 py-80 bg-center "> 
        <div className="flex  items-center">
        <div className="flex-1 pr-8">
          <Image src={Logo} alt="logo" />
          <h1 className="uppercase text-center text-4xl text-white font-bold">Localização</h1>
          <p className="text-center text-1xl text-color-details mb-3">ABDALLA MALL, EQS 502/503 <br/>Asa Sul, Brasília - DF</p>
          <div className="lg:space-y-4 text-center mr-4">
            <div className="flex flex-col items-center">
          <p className="font-bold uppercase text-white text-4xl">
            siga-nos
          </p>
          <span className="flex  flex-row lg:gap-2  m-4">
            <SocialIcons icon={FaFacebookF} />
            <SocialIcons icon={FaInstagram} />
            <SocialIcons icon={FaYoutube} />
            <SocialIcons icon={FaSpotify} />
          </span>
          </div>
          <p className="uppercase text-white font-bold text-1xl ">&copy; Todos os direitos reservados a Fit Life</p>
        </div>
       
        </div>

        <form action="" method="post"   className="flex flex-col ">
          <h1 className="uppercase text-center text-[37px] text-white font-bold">Formulário de contato</h1>
          <input type="text" placeholder="Digite seu nome" className="rounded-lg py-3 bg-neutral-200 text-color-secundary pl-2"/>
          <input type="email" placeholder="Digite seu email" className="rounded-lg py-3 bg-neutral-200 my-5 text-color-secundary pl-2"/> 
          <textarea name="msg" id="msg" placeholder="Digite sua mensagem" className="bg-neutral-200 rounded-lg py-3 text-color-secundary pl-2" ></textarea>
         <Button
              bgColor="bg-color-details"
              borderRadius="rounded-lg"
              font="font-bold"
              hover="hover:bg-[#008645] hover:shadow-md"
              paddingX="px-6"
              paddingY="py-4"
              textColor="text-white">Enviar</Button>
          </form>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contato;
