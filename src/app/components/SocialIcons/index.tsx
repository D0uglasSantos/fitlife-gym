import { ElementType } from "react";

interface SocialIconsProps {
  icon: ElementType;
}

const SocialIcons = ({ icon: Icon }: SocialIconsProps) => {
  return (
    <div className="bg-color-details hover:bg-green-900 px-2 py-2 flex items-center justify-center rounded-full cursor-pointer duration-150 transition-all">
      <Icon className="h-6 w-6 text-white" />
    </div>
  );
};

export default SocialIcons;
