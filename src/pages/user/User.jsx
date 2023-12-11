/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineReload } from "react-icons/ai";
import ReactPlayer from "react-player";

import Header from '../../components/header/Header'
import Contador from '../../components/contador/Contador'
import CadastrarVideo from '../../components/cadastrarVideo/CadastrarVideo'


export default function User() {
  const [ videoLoading, setVideoLoading] = useState(true);
  const [evento, setEvento] = useState("")
  const navigate = useNavigate();

  const userVideo = ["https://youtu.be/lIc63OA-5_o?si=0tJXrCvgrfiUOsay"]

  const buttonsStyles = "w-4/5 rounded-xl border border-black p-2 text-center my-2 duration-300 text-white cursor-pointer bg-originBlue hover:bg-originBlue/90"

  const data = useSelector((state) => state.userData.data)

  useEffect(() => {
    data.id === '' && navigate("/")
  }, [data.id])


  const handleVideoLoading = ( ) => {
    setVideoLoading((prev) => !prev)
  }

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-originLight">
        <h1 className="text-5xl mt-32 mb-4">Seja Bem Vindo(a)!</h1>
        <h2 className='text-xl'>Essa é a sua área pessoal para adminstrar suas informações.</h2>

        <div className="w-4/5 flex justify-between text-xl mt-24 items-center">
          <ul className="w-1/2 flex flex-col justify-between transition-all">
            <li className={buttonsStyles}>
              <Link to={`/editarUsuario/${data.id}`} >Atualizar Informações</Link>
            </li>
            <li className={buttonsStyles} onClick={() => setEvento("Cadastrar")}>Cadastrar Video</li>
            <li className={buttonsStyles} onClick={() => setEvento("Vizualizar")}>Visualizar meus videos</li>
            <li className={buttonsStyles}>Excluír conta</li>
          </ul>
          <div className='w-1/2 flex flex-col items-center justify-center text-5xl text-center'>
            <h3>Evento atual:</h3>
            <Contador />
          </div>
        </div>
        <div className="h-full border w-4/5 m-24 p-10 shadow-sm shadow-black">
          {evento == "" && <div className="text-5xl min-h-[8rem] w-full flex justify-center items-center" >Selecione uma Opção</div>}
          {evento === "Cadastrar" && <CadastrarVideo />}
          {evento === "Vizualizar" && 
            <div 
              className="relative pt-[50.25%] pr-[50.25%] max-sm:pt-[40.25%] max-sm:pr-[80.25%] w-full flex items-center justify-center">
                {
                  videoLoading ?
                    <AiOutlineReload size="4rem" className="absolute top-[36%] left-[42%] animate-spin text-originBlue"/>
                  : null
                }
                  <ReactPlayer 
                    className="absolute top-0 left-0 mx-2" 
                    width='100%' 
                    height="100%" 
                    url={userVideo}
                    onReady={handleVideoLoading} />
            </div>
          }
        </div>
      </div>

    </>
  )
}

//temos que fazer um if e else para renderixar um component especifico
//vamos fazer os componentes em outra pasta ent