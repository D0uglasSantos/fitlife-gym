import Button from "../Button";

interface MotivationSectionProps {}

const MotivationSection = ({}: MotivationSectionProps) => {
  return (
    <section className="bg-motivation-mobile bg-cover bg-fixed py-10 px-2 flex items-center justify-center h-[600px] md:bg-motivation-desktop">
      <div className="w-4/6 text-center flex flex-col space-y-8 justify-center items-center">
        <h1 className="text-xl font-bold uppercase text-white md:font-bold md:text-5xl">
          foco, força e fit
        </h1>
        <p className=" text-white font-light text-sm md:text-lg md:font-normal md:w-2/5  ">
          Treine resistência muscular para sua hipertrofia ou emagrecimento
        </p>
        <div className="">
          <Button
            bgColor="bg-white"
            font="font-bold"
            text="text-xl"
            borderRadius="rounded-full"
            paddingY="py-2 md:py-4"
            paddingX="px-4 md:px-8"
            textColor="text-color-details"
            hover="hover:text-green-700 hover:shadow-lg"
          >
            Encontre sua Unidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
