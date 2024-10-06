import BannerPages from "../../components/BannerPages";
import imagem1 from "../../../public/images/1-paginasobre.svg";
import imagem2 from "../../../public/images/2-paginasobre.svg";
import Image from "next/image";

interface SobreProps {}

const Sobre = ({}: SobreProps) => {
  return (
    <section>
      <BannerPages namePage="Sobre" />
      <div className="bg-white py-10 flex items-center flex-col 4">
        <h1
          className="uppercase text-center
         lg:text-5xl font-bold text-color-primary"
        >
          conheça um pouco{" "}
          <span className="text-color-details">
            mais da <br />
            nossa história
          </span>
        </h1>
        <div className="flex items-center justify-between lg:pl-24 lg:py-10 w-full">
          <div className="lg:space-y-6 lg:w-2/4">
            <h2 className="uppercase lg:text-5xl font-bold text-color-primary">
              a história
            </h2>
            <p className="lg:text-lg text-gray-500 font-light w-3/4">
              A Fit Life nasceu do sonho de criar um espaço onde pessoas de
              todas as idades e níveis de condicionamento físico pudessem
              transformar suas vidas por meio do movimento e da saúde.
              <br />
              <br />
              Com o passar dos anos, a Fit Life cresceu, expandiu sua estrutura
              e equipe, mas nunca perdeu sua essência: promover bem-estar,
              incentivar a superação de limites e fortalecer tanto o corpo
              quanto a mente.
              <br />
              <br />
              Cada conquista dos nossos alunos é um reflexo do nosso compromisso
              em oferecer mais do que apenas um lugar para treinar, somos uma
              comunidade que valoriza a saúde e o equilíbrio.
            </p>
          </div>
          <Image src={imagem1} alt="imagem" className="w-1/2" />
        </div>
        <div className="bg-color-primary py-10 lg:space-y-10 text-justify flex flex-col items-center justify-center">
          <h1 className="uppercase text-center lg:text-5xl font-bold text-white">
            nossa <span className="text-color-details">missão</span>
          </h1>
          <p className="w-2/6 text-white font-light">
            Na Fit Life, nossa missão é transformar vidas por meio da atividade
            física, promovendo saúde, bem-estar e equilíbrio. Acreditamos que
            todos têm o potencial de alcançar seus objetivos, seja ganhar força,
            melhorar a forma física ou adotar um estilo de vida mais saudável.
            <br />
            <br />
            Nosso compromisso é oferecer um ambiente motivador e acolhedor, com
            infraestrutura de ponta e uma equipe de profissionais qualificados,
            que acompanham cada aluno de forma personalizada. Trabalhamos para
            que nossos alunos se sintam inspirados e apoiados em sua jornada,
            sempre com foco na saúde física, mental e emocional.
          </p>
          <p className="font-bold text-white w-2/6 text-center">
            Mais do que uma academia, somos um espaço de transformação e
            superação contínua.
          </p>
        </div>
        <div className="flex items-center justify-between pr-24 py-10 w-full">
          <Image src={imagem2} alt="imagem" className="w-1/2" />
          <div className="lg:space-y-6 lg:w-2/4 lg:text-right flex flex-col items-end ">
            <h2 className="uppercase lg:text-5xl font-bold text-color-primary">
              a história
            </h2>
            <p className="lg:text-lg text-gray-500 font-light w-3/4 ">
              A Fit Life nasceu do sonho de criar um espaço onde pessoas de
              todas as idades e níveis de condicionamento físico pudessem
              transformar suas vidas por meio do movimento e da saúde.
              <br />
              <br />
              Com o passar dos anos, a Fit Life cresceu, expandiu sua estrutura
              e equipe, mas nunca perdeu sua essência: promover bem-estar,
              incentivar a superação de limites e fortalecer tanto o corpo
              quanto a mente.
              <br />
              <br />
              Cada conquista dos nossos alunos é um reflexo do nosso compromisso
              em oferecer mais do que apenas um lugar para treinar, somos uma
              comunidade que valoriza a saúde e o equilíbrio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
