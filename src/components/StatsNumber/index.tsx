"use client";
import CountUp from "react-countup";

interface StatsProps {}

const stats = [
  {
    num: 45,
    text: "Módulos Diferentes",
  },
  {
    num: 90,
    text: "Minutos por turma",
  },
  {
    num: 35,
    text: "turmas por semana",
  },
  {
    num: 20,
    text: "unidades em brasília",
  },
];

const Stats = ({}: StatsProps) => {
  return (
    <div className="h-max py-10 flex items-center justify-around bg-color-details text-white w-full">
      {stats.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1"
          >
            <CountUp
              end={item.num}
              duration={6}
              delay={2}
              className="lg:text-7xl font-extrabold"
            />
            <p className="text-white uppercase lg:text-2xl font-medium ">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
