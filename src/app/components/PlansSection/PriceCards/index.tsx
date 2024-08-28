import Button from "../../Button";
import { SlArrowRight } from "react-icons/sl";

interface PriceCardsProps {
  planoTitle: string;
  description: string;
  priceDescription: string;
  months: string;
}

const PriceCards = ({
  planoTitle,
  description,
  priceDescription,
  months,
}: PriceCardsProps) => {
  return (
    <div className="border rounded-xl border-zinc-400 px-5 py-5 space-y-4 w-3/4 md:hidden">
      <div>
        <h1 className="text-lg text-black">
          Plano <span className="font-bold">{planoTitle}</span>
        </h1>
        <p className="font-light text-xs text-zinc-400">{description}</p>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-1">R$ 9,90 *</h2>
        <p className="text-xs text-zinc-500">
          <span className="font-bold text-black">no 1º mês,</span>,
          {priceDescription}
        </p>
        <p className="text-xs text-zinc-400">{months} meses de fidelidade</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <Button
          bgColor="bg-color-details"
          borderRadius="rounded-full"
          paddingX="px-14"
          paddingY="py-2"
          font="font-bold"
          text="text-sm"
          hover="hover:bg-green-800"
        >
          Começar agora
        </Button>
        <div className="text-[10px] text-zinc-400 flex items-center justify-center gap-2">
          <p>Mostrar benefícios</p>
          <SlArrowRight />
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
