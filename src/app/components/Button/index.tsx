interface ButtonProps {
  children: string;
  bgColor?: string;
  borderRadius?: string;
  paddingY?: string;
  paddingX?: string;
  font?: string;
  text?: string;
  hover?: string;
  textColor?: string;
}

const Button = ({
  children,
  bgColor,
  borderRadius,
  paddingY,
  paddingX,
  font,
  text,
  hover,
  textColor,
}: ButtonProps) => {
  return (
    <button
      className={`${paddingY} ${paddingX} ${bgColor} ${borderRadius} ${hover} ${textColor} ${text} ${font} mt-4 lg:text-xl shadow-2xl transition-colors duration-100 `}
    >
      {children}
    </button>
  );
};

export default Button;
