import Image from "next/image";
import vIcon from "/public/images/v-icon.svg";
import xIcon from "/public/images/x-icon.svg";
import { IoMdClose } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";

const plans = [
  {
    name: "Infinity",
    description: "Treine em amis de 100 academias Fit Life!",
    price: "R$ 9,90*",
    month: "no 1º mês,",
    priceDetails: "depois R$99,90/mês",
    features: [
      { text: "Acesso ilimitado a +200 academias da rede", available: true },
      { text: "Leve amigos para treinar com você", available: true },
      { text: "Cadeira de massagem", available: true },
      { text: "Smart Fit GO (treinos online) no app", available: true },
      { text: "Área de musculação e aeróbicos", available: true },
      { text: "Smart Fit App", available: true },
    ],
    loyalty: "12 meses de fidelidade",
  },
  {
    name: "Flex",
    description: "Pague menos para treinar o quanto quiser na sua unidade.",
    price: "R$ 9,90*",
    month: "no 1º mês,",
    priceDetails: " depois R$109,90/mês",
    features: [
      { text: "Acesso ilimitado a +200 academias da rede", available: false },
      { text: "Leve amigos para treinar com você", available: false },
      { text: "Cadeira de massagem", available: true },
      { text: "Smart Fit GO (treinos online) no app", available: true },
      { text: "Área de musculação e aeróbicos", available: true },
      { text: "Smart Fit App", available: true },
    ],
    loyalty: "12 meses de fidelidade",
  },
  {
    name: "Smart",
    description: "Treine o quanto quiser na sua unidade.",
    price: "R$ 9,90*",
    month: "no 1º mês,",
    priceDetails: " depois R$119,90/mês",
    features: [
      { text: "Acesso ilimitado a +200 academias da rede", available: false },
      { text: "Leve amigos para treinar com você", available: false },
      { text: "Cadeira de massagem", available: true },
      { text: "Smart Fit GO (treinos online) no app", available: true },
      { text: "Área de musculação e aeróbicos", available: true },
      { text: "Smart Fit App", available: true },
    ],
    loyalty: "6 meses de fidelidade",
  },
];

const Table = () => {
  return (
    <table className="w-2/3 max-md:hidden">
      <thead className="py-4">
        <tr className="border-b-0.5 border-slate-400">
          <th className="w-max"></th>
          {plans.map((plan) => (
            <th key={plan.name} className="w-1/5 py-4 px-2">
              <p className="text-lg font-normal">
                Plano <span className="font-bold text-black">{plan.name}</span>
              </p>
              <p className="text-xs font-thin">{plan.description}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {plans[0].features.map((feature, index) => (
          <tr key={index} className="border-b-0.5 border-slate-400 text-center">
            <td className="text-left py-3 text-sm font-light  px-4">
              {feature.text}
            </td>
            {plans.map((plan) => (
              <td key={plan.name} className="">
                {plan.features[index].available ? (
                  <div className="flex items-center justify-center w-full">
                    <BsCheckCircleFill className="text-color-details w-6 h-6" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <IoMdClose className="w-6 h-6" />
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
        <tr className="text-center">
          <td className=""></td>
          {plans.map((plan) => (
            <td key={plan.name} className="w-1/5 py-4 px-2">
              <p className="font-bold text-lg">{plan.price}</p>
              <p className="font-light text-sm text-slate-500 pb-1">
                <span className="font-bold text-black">{plan.month}</span>
                {plan.priceDetails}
              </p>
              <p className="text-xs text-slate-500">{plan.loyalty}</p>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
