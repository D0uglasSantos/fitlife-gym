"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "/public/images/fitLife-logo-500-200.svg";

interface NavbarProps {}

const items = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "sobre",
    path: "/sobre",
  },
  {
    text: "equipe",
    path: "",
  },
  {
    text: "unidades",
    path: "/unidades",
  },
  {
    text: "contato",
    path: "/contato",
  },
  {
    text: "baixe o app",
    path: "",
  },
  {
    text: "área do aluno",
    path: "/aluno",
  },
];

const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between w-4/5 items-center absolute top-0">
      <Image src={logo} alt="logo fit life" width={185} height={62} />
      <nav className="flex gap-8 text-white text-base">
        {items.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={index}
              className={`${
                item.path === pathname && "text-color-details"
              } uppercase font-medium hover:text-color-details transition-all`}
            >
              {item.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
