import { FaLocationDot } from "react-icons/fa6";

interface FixedFooterProps {}

const FixedFooter = ({}: FixedFooterProps) => {
  return (
    <div className="h-max py-3 flex items-center justify-center gap-4 bg-color-primary w-full fixed bottom-0 md:hidden">
      <div className="flex gap-1">
        <FaLocationDot className="text-color-details " />
        <p className="text-xs text-white">Tem uma Fit Life pertinho de você!</p>
      </div>
      <button className="bg-transparent border border-color-details py-px px-2 rounded-full text-color-details text-[10px] ">
        Veja Unidades
      </button>
    </div>
  );
};

export default FixedFooter;
