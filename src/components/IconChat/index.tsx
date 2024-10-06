import { FaWhatsapp } from "react-icons/fa";

interface IconChatProps {}

const IconChat = ({}: IconChatProps) => {
  return (
    <div className="px-3 py-3 bg-color-details fixed right-5 bottom-16 rounded-full hover:bg-green-900 transition-colors duration-100 cursor-pointer">
      <FaWhatsapp className="text-white h-7 w-7 md:h-10 md:w-10" />
    </div>
  );
};

export default IconChat;
