import ItemsVerify from "./ItemsVerify";
import Button from "../Button";
import GaleryGym from "./Galery";
import Image from "next/image";
import FitPerson from "/public/images/foto-section-2-desktop.svg";

const CompareSection = () => {
  return (
    <section className="bg-color-secundary h-max flex flex-col items-center justify-start space-y-6 py-10">
      <div className="w-4/5 text-left md:flex items-center justify-around md:w-11/12">
        <div className="w-1/2 hidden md:flex">
          <Image src={FitPerson} alt="Fit person exercising" />
        </div>
        <div className="space-y-10 md:w-1/2">
          <h1 className="text-lg font-light text-white md:text-4xl md:w-4/5">
            Treinar na Fit Life é muito mais vantagem
            <span className="font-bold text-color-primary">
              {" "}
              Pode comparar!!
            </span>
          </h1>
          <div className="flex flex-col justify-start items-start space-y-3">
            <ItemsVerify text="Acesso a todas as aulas" />
            <ItemsVerify text="Acesso total à academia" />
            <ItemsVerify text="Sem restrição de horários" />
            <ItemsVerify text="Leve até 5 amigos para treinar" />
          </div>
          <Button
            bgColor="bg-color-primary"
            borderRadius="rounded-full"
            font="font-bold"
            paddingX="px-6"
            paddingY="py-4"
            text="text-sm"
            textColor="text-white"
            aria-label="Matricule-se já"
            hover="hover:text-color-secundary"
          >
            MATRICULE-SE JÁ
          </Button>
        </div>
      </div>
      <GaleryGym />
      <div className="text-center flex flex-col items-center md:space-y-2 text-color-secundary">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          + de 45 aulas
        </h1>
        <p className="text-base text-white bg-color-primary w-max py-1 px-1 md:text-2xl">
          Monte sua grade do jeito que quiser
        </p>
        <p className="text-xs text-white">
          Você tem acesso a todas as aulas, em todas as unidades Fit Life
        </p>
      </div>
    </section>
  );
};

export default CompareSection;
