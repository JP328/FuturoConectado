import { useRef } from "react";
import {SiLinkedin, SiGithub, SiFacebook, SiInstagram} from "react-icons/si";
import {BsFillTelephoneFill} from "react-icons/bs";
import { Link } from "react-router-dom";


import Header from "../../components/header/Header";
import TeamCard from "../../components/teamCard/TeamCard";
import VideoSection from "../../components/videoSection/VideoSection";

export default function Home() {

  const start = useRef();
  const recentUploads = useRef();
  const ourTeam = useRef();
  const aboutUs = useRef();
  const contact = useRef();

  const timeMembers = [
    {
      name: "João Pedro",
      img: "./img/JoaoPedro.jpeg",  
      description: "Me chamo João Pedro!"      
    },
    {
      name: "João Paulo",
      img: "./img/JpOFC.jpg",
      description: "Olá, sou o João Paulo."
    },
    {
      name: "Pedro Henrique",
      img: "./img/Pedro.jpeg",
      description: "Olá, meu nome é Pedro Henrique."
    },
    {
      name: "Pablo",
      img: "./img/Pablo.jpeg",
      description: "Muito prazer sou Pablo."
    },
    {
      name: "Nicolas",
      img: "./img/Nicolas.jpg",
      description: "Olá!, me chamo Nicolas."
    },
    {
      name: "Ingrid Ribeiro",
      img: "./img/Ingrid.jpeg",
      description: "Olá!, me chamo Ingrid Ribeiro."
    }
  ]

  return (
    <>
      <Header start={start} recentUploads={recentUploads} ourTeam={ourTeam} aboutUs={aboutUs}  contact={contact}/>

      <div className="w-full h-screen relative select-none" ref={start}>
        <video src="/production_id_4625285.mp4" className="-z-10 absolute w-full h-full object-cover" autoPlay loop muted/>
 
        <div className="w-full h-screen bg-gradient-to-t from-originBlue to-originRed/70">
          <div className="w-full relative h-full overflow-hidden px-6 pt-16 max-md:pt-52 sm:px-16 md:pt-24 lg:flex lg:px-24 lg:pt-0"> 
            <div className="w-full mx-auto lg:pt-52 md:pt-28 md:px-14 md:text-left text-slate-200">
              <h2 className="text-center font-bold max-md:text-2xl md:text-5xl xl:text-6xl">
                Conectando Pessoas, trazendo o futuro para o presente!
              </h2>

              <p
                className=" w-full text-center mr-56 mt-12 mb-12 lg:mb-30 max-md:px-12 text-xl font-bold sm:text-4xl md:text-3xl">
                Venha mudar o mundo com a gente!
              </p>
              <div className="flex items-center justify-center">
                <Link 
                  className="text-slate-200 border shadow-sm shadow-originLight font-semibold border-originLight hover:text-lg duration-300 focus:ring-4 focus:ring-primary-300 rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-primary-800" 
                  to={'/cadastre-se'}
                >
                  Cadastre-se!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center bg-slate-200 select-none"> 
        
        <div ref={recentUploads} className="w-full h-full bg-originBlue py-14 flex items-center flex-col">
          <VideoSection/>
          <Link 
            className="mt-8 text-xl font-bold text-originLight border border-originLight py-3 px-6 rounded-lg shadow hover:shadow-originLight">
            Ver Todos
          </Link>
        </div>

        <div className="w-full h-20 bg-breakLineBlue bg-no-repeat bg-center bg-cover"/>
 
        <div 
          ref={aboutUs}
          className="w-3/4 flex flex-col justify-center mt-text-4xl font-bold text-gray-900 md:text-6xl"
        > 
          <h1 className="text-4xl lg:text-6xl text-center mt-16 mb-4">Sobre Nós</h1>
          <p className="mt-6 text-lg text-justify leading-7 font-medium">
            Bem-vindos(as) à nossa ONG, onde acreditamos no poder dos entusiastas engajados em causas sociais para transformar o mundo em um lugar melhor! Nossa missão é proporcionar um ambiente de apoio e recursos para essas pessoas servindo como impulsionador para suas ideias alcançarem os holofotes e, quem sabe, sair do papel!
            <br />
            TROCAR - Somos uma gravadora inovadora, apaixonada por música e movida pela tecnologia. Nosso foco é descobrir e nutrir talentos emergentes, proporcionando um ambiente criativo e estimulante onde os jovens artistas podem explorar seu potencial artístico e abraçar a interseção entre a música e a tecnologia. Com nossos estúdios de última geração e uma comunidade de mentores experientes, oferecemos suporte personalizado e oportunidades de crescimento para que os artistas desenvolvam suas habilidades musicais e se destaquem na indústria. Estamos comprometidos em impulsionar a inovação, criando o futuro sonoro e deixando uma marca duradoura na indústria da música.
          </p>
        </div>

        <div
          ref={ourTeam} 
          className="w-4/5 flex flex-col mt-10"
        > 
          <h1 className="text-center text-6xl font-bold my-14">Nosso Time</h1>          
          <div className="w-full flex flex-wrap justify-around gap-8 mb-20">
            {
              timeMembers.map((member, index) => {
                return (
                  <div 
                    key={index}  
                    className="w-full md:w-[46%] lg:w-1/3 h-full my-5 flex max-md:flex-col items-center justify-center relative text-slate-200 select-none"
                  >
                    <TeamCard name={member.name} img={member.img} description={member.description} />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="w-full h-24 bg-breakLineRed bg-no-repeat bg-center bg-cover rotate-180"/>

        <div 
          ref={contact}
          className="h-full w-full pb-5 pl-20 font-bold text-slate-300 text-xl bg-originRed"
        > 
            <h2 className="font-bold text-4xl mb-4">Contatos</h2>
            
            <div className="flex my-2 items-center gap-2"> 
              <BsFillTelephoneFill/>
              <p>(11) 20135-5457</p>
            </div>

            <div className ="my-2">
              <a href="https://www.linkedin.com/check/manage-account" className="flex items-center gap-2">
                <SiLinkedin/>
                Linkedin
              </a>
            </div>

            <div className ="my-2">
              <a href="https://github.com/JP328/ProjetoA3-20231-Gravadora" className="flex items-center gap-2">
                <SiGithub/>
                GitHub
              </a>
            </div> 

            <div className ="my-2">
              <a href="https://pt-br.facebook.com/" className="flex items-center gap-2">
                <SiFacebook/>
                Facebook
              </a>
            </div>

            <div className ="my-2">
              <a href="https://www.instagram.com/" className="flex items-center gap-2">
                <SiInstagram/>
                Instagram
              </a>
            </div>

        </div>
      </div>
    </>        
  )
}