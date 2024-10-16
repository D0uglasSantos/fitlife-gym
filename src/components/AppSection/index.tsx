import Image from "next/image";
import GooglePlay from "/public/images/google-play-download.svg";
import AppStore from "/public/images/app-store-download.svg";
import qrCode from "/public/images/qr-code-download.png";
import Devices from "/public/images/devices-app.svg";

interface AppSectionProps {}

const AppSection = ({}: AppSectionProps) => {
  return (
    <section className=" md:bg-color-primary flex items-center justify-center h-max py-10 px-2">
      <div className="text-center flex flex-col items-center justify-center space-y-8 md:justify-center md:items-start md:text-left md:w-1/2">
        <h1 className=" font-bold text-white text-2xl w-2/3 md:text-4xl md:w-max">
          Acompanhe seu treino pelo APP!
        </h1>
        <p className="text-sm text-zinc-400 font-light w-3/4 md:text-white md:text-base md:font-normal md:w-2/4">
          Acompanhe o progresso das suas metas, aulas online e a experiência Fit
          Life dentro e fora da academia na palma da mão.
        </p>
        <p className="max-md:hidden text-white">Escaneie o código para baixar o app</p>
        <div className="flex items-center justify-center gap-4">
          <p className="max-md:hidden">
            <Image src={qrCode} alt="Qr Code Download" />
          </p>
          <div className="flex flex-col gap-3">
            <Image src={GooglePlay} alt="Google Play" />
            <Image src={AppStore} alt="App Store" />
          </div>
        </div>
      </div>
      <div className="max-md:hidden">
        <Image src={Devices} alt="Devices Examples" />
      </div>
    </section>
  );
};

export default AppSection;
