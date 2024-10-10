import BannerPages from "../../components/BannerPages";
import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Button";
interface UnidadesProps {}
interface BanUnidades{
  id:number,
  path_image: string,
  unidade: string,
  local: string

}
const banUnidades: BanUnidades[]=[
  {
    id: 1,
    path_image: "/images/1.svg",
    unidade: "Guára",
    local: " EQS 502/503 Asa Sul, Brasília - DF" 
  },
  {
    id: 2,
    path_image: "/images/5.svg",
    unidade: "Planaltina",
    local: " Pebble Lane Brasília - DF" 
  },
  {
    id: 3,
    path_image: "/images/2.svg",
    unidade: "Asa Sul",
    local: " Garden Boulevard, Brasília - DF" 
  },
  {
    id: 4,
    path_image: "/images/3.svg",
    unidade: "Sobradinho",
    local: " Heritage Avenue, Brasília - DF" 
  },
  {
    id: 5,
    path_image: "/images/6.svg",
    unidade: "Riacho fundo II",
    local: " EQS 502/503 Asa Sul , Brasília - DF" 
  },
  {
    id: 6,
    path_image: "/images/4.svg",
    unidade: "Asa Norte",
    local: " Cross Way, Brasília - DF" 
  },
]
const Unidades = ({}: UnidadesProps) => {
  
  return (
    <section>
      <BannerPages namePage="Unidades" />
      <div className="gap-10 bg-color-primary bg-no-repeat bg-cover flex flex-col items-center">
        <h1 className="text-color-details font-semibold uppercase m-0 mt-9">Escolha a unidade mais próxima</h1>
        <div className=" flex-col  flex-nowrap grid grid-cols-3 gap-9 items-center" >
            {banUnidades.map((item)=>(
              <div key={item.id} className=" bg-color-secundary bg-opacity-45 flex flex-col items-center gap-5 content-center rounded-xl p-5">
              <Image src={item.path_image} alt="Unidade" width={220} height={180} className="rounded-xl"/>
               <h1 className="text-white m-0"> {item.unidade}</h1>
                <p className="text-white">{item.local}</p>
                <Button
                 bgColor="bg-color-details"
                 borderRadius="rounded-lg"
                 font="font-bold"
                 hover="hover:bg-[#008645] hover:shadow-md"
                 paddingX="px-6"
                 paddingY="py-4"
                 textColor="text-white" >Matricule-SE</Button>
              </div>
              ))}
          
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Unidades;
