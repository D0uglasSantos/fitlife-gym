import Button from "../Button";
import PriceCards from "./PriceCards";
import Table from "../Table";

interface PlansSectionProps {}

const PlansSection = ({}: PlansSectionProps) => {
  return (
    <section className="bg-color-white h-max flex flex-col items-center justify-start space-y-6 py-10">
      <Header />
      <Table />
      <PricePlans />
      <Button
        bgColor="bg-color-details"
        borderRadius="rounded-lg"
        paddingX="px-10"
        paddingY="py-2"
        font="font-bold"
        text="text-sm"
        hover="hover:text-green-900 hover:shadow-lg"
        textColor="text-white"
      >
        Fazer Matrícula
      </Button>
    </section>
  );
};

const Header = () => (
  <div className="flex flex-col items-center space-y-2">
    <h1 className="text-xl font-bold text-color-details text-center md:text-3xl">
      <span className="text-color-primary ">Conheça</span> os planos{" "}
      <br className="md:hidden hover:shadow-lg" />
      desta academia
    </h1>
    <p className="sm:hidden md:flex text-sm font-light">
      Os valores abaixo são promocionais. Aproveite!
    </p>
  </div>
);

const PricePlans = () => (
  <>
    <PriceCards
      planoTitle="Black"
      description="Treine em mais de 100 academias FitLife"
      priceDescription="depois R$ 119,90 /mês"
      months="12"
    />
    <PriceCards
      planoTitle="Fit"
      description="Pague menos para treinar o quanto quiser na sua unidade."
      priceDescription="depois R$ 109,90 /mês"
      months="12"
    />
    <PriceCards
      planoTitle="Smart"
      description="Treine quando quiser na sua unidade"
      priceDescription="depois R$ 99,90 /mês"
      months="3"
    />
  </>
);

export default PlansSection;
