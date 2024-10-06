import { FaCheck } from "react-icons/fa";

interface ItemsProps {
  text: string;
}

const ItemsVerify = ({ text }: ItemsProps) => {
  return (
    <div className="flex items-center gap-2 w-full md:gap-4">
      <FaCheck className="text-color-details text-xl md:text-3xl" />
      <p className=" font-bold text-white text-xg text-left md:text-2xl">{text}</p>
    </div>
  );
};

export default ItemsVerify;
