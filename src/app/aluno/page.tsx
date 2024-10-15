import Image from "next/image"
import Logo from "../../../public/images/fitLife-logo-500-200.svg"
import Button from "@/components/Button"
import Google from "../../../public/images/google.png"
import Face from "../../../public/images/facebook.png"
import Apple from "../../../public/images/logotipo-da-apple.png"

interface alunoProps{}
const Aluno = ({}: alunoProps)=>{
    return(
        <section className=" flex   bg-color-primary  ">
           <div className="bg-bgAluno  w-2/4 bg-no-repeat  "></div>
           
                <div className="flex flex-col  w-2/4 justify-center items-center">
                <div className="text-white flex w-[32rem] m-6"><a href="/">&lt; Voltar</a></div>         
            <Image src={Logo} alt="logo" width={500} height={300}/>

            <h1 className="text-white uppercase font-bold text-4xl ">Login</h1>
           
            <form action="" method="post" className="flex flex-col  ">
            <p className="text-white ">Email</p>
            <input type="email" placeholder="Digite seu email" className="rounded-lg mt-3 mb-3 p-3 w-[32rem] border-white border-solid border bg-color-primary placeholder-white text-white border-opacity-45" ></input>
            <p className="text-white ">Senha</p>
            <input type="password" placeholder="Digite sua senha" className="rounded-lg mt-3 p-3 w-[32rem] border-white border-solid border bg-color-primary placeholder-white text-white border-opacity-45" ></input><br/>
            <a href="/" className="text-color-details flex  justify-end p-2  decoration-solid underline">Esqueceu sua senha?</a><br/>
            <Button
            bgColor="bg-color-details"
            borderRadius="rounded-lg"
            font="font-bold"
            hover="hover:bg-[#008645] hover:shadow-md"
            paddingX="px-6"
            paddingY="py-4"
            textColor="text-white">
                Log in</Button>
            </form><br/>
            <hr className=" border border-b-white w-[32rem]"></hr>
            <div className="flex flex-col items-center content-center p-5 gap-4">
                <div className="flex gap-4">
            <p className="border-solid border rounded-full p-2 "><Image src={Google} width={30} height={30} alt="google"/></p>
            <p className="border-solid border rounded-full p-2"><Image src={Face} width={30} height={30} alt="google"/></p>
            <p className="border-solid border rounded-full p-2"><Image src={Apple} width={30} height={30} alt="google"/></p>
            </div>
            <p className="text-white">Não tem uma conta? <a href="/cadastro" className="text-color-details decoration-solid underline">Clique Aqui</a></p>
            </div>
            </div>
            
          
         
        </section>
    )
}



export default Aluno