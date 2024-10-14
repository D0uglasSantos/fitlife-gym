import Image from "next/image"
import Logo from "../../../public/images/fitLife-logo-500-200.svg"
import Button from "@/components/Button"
interface cadastroProps{}
const cadastro=({}:cadastroProps)=>{
    return(
        <section className=" flex  bg-color-primary  ">
           <div className="bg-bgCadastro  w-2/4 bg-no-repeat "></div>
                <div className="flex flex-col  w-2/4 justify-center items-center">
                    
            <Image src={Logo} alt="logo" width={500} height={300}/>

            <h1 className="text-white uppercase font-bold text-4xl ">Configuração de acesso</h1>
           
            <form action="" method="post" className="flex flex-col  ">
            <p className="text-white ">Nome Completo</p>
            <input type="text" placeholder="Digite seu Nome Completo" className="rounded-lg mt-3 mb-3 p-3 w-[32rem] border-white border-solid border bg-color-primary placeholder-white text-white border-opacity-45" ></input>
            <p className="text-white ">N° de telefone</p>
            <input type="tel" placeholder="Digite seu número de telefone" className="rounded-lg mt-3 mb-3 p-3 w-[32rem] border-white border-solid border bg-color-primary placeholder-white text-white border-opacity-45" ></input>
            <p className="text-white ">Email</p>
            <input type="email" placeholder="Digite seu email" className="rounded-lg mt-3 mb-3 p-3 w-[32rem] border-white border-solid border bg-color-primary placeholder-white text-white border-opacity-45" ></input>
            <p className="text-white ">Senha</p>
            <input type="password" placeholder="Digite sua senha" className="rounded-lg mt-3 mb-3 p-3 w-[32rem] border-white border-solid border bg-color-primary placeholder-white text-white border-opacity-45" ></input>
            <p className="text-white ">Confirmação de Senha</p>
            <input type="password" placeholder="Confirme sua senha" className="rounded-lg mt-3 p-3 w-[32rem] border-white border-solid border bg-color-primary placeholder-white text-white border-opacity-45" ></input>
            <br/>
            <Button
            bgColor="bg-color-details"
            borderRadius="rounded-lg"
            font="font-bold"
            hover="hover:bg-[#008645] hover:shadow-md"
            paddingX="px-6"
            paddingY="py-4"
            textColor="text-white">
                Cadastrar</Button>
            </form><br/>
            <p className="text-white ">Já tem uma conta? <a href="/aluno" className="text-color-details decoration-solid underline">Log in</a></p>
            
            </div>
            
          
         
        </section>
    )
}

export default cadastro