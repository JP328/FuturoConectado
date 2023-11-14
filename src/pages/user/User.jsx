/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import Contador from '../../components/contador/Contador'
import CadastrarVideo from '../../components/cadastrarVideo/CadastrarVideo'

export default function User() {

  const navigate = useNavigate();

  const buttonsStyles = "w-4/5 border border-black p-2 text-center my-2 duration-300 hover:bg-originBlue hover:text-white cursor-pointer"

  const { id, name, email, password } = useSelector((state) => {
    return {
      id: state.userData.data.id,
      name: state.userData.data.name,
      email: state.userData.data.email,
      password: state.userData.data.password,
    }
  })

  useEffect(() => {
    id === '' && navigate("/")
  }, [id])

  const [evento, setEvento] = useState("")



  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col justify-center items-center bg-originLight">
        <div className='w-full h-screen flex flex-col justify-center items-center bg-originLight'></div>
        <h1 className="text-5xl my-5">Seja Bem Vindo(a)!</h1>
        <h2 className='text-xl'>Essa é a sua área pessoal para adminstrar suas informações.</h2>

        <div className="w-4/5 flex justify-between text-xl mt-24 items-center">
          <ul className="w-1/2 flex flex-col justify-between transition-all">
            <li className={buttonsStyles}>
              <Link to={`/editarUsuario/${id}`} >Atualizar Informações</Link>
            </li>
            <li className={buttonsStyles} onClick={() => setEvento("Cadastrar")}>Cadastrar Video</li>
            <li className={buttonsStyles} onClick={() => setEvento("Vizualizar")}>Visualizar meus videos</li>
            <li className={buttonsStyles}>Excluír conta</li>
          </ul>
          <div className='w-1/2 flex flex-col items-center text-5xl gap-10'>
            <h3>Evento atual:</h3>
            <Contador />
          </div>
        </div>
        <div className="h-[250vh] border w-4/5 m-24">
          {evento == "" && <div className="text-5xl h-full w-full  flex justify-center items-center bg-gray-200" >Selecione uma Opção</div>}
          {evento === "Cadastrar" && <CadastrarVideo />}
          {evento === "Vizualizar" && <div className="">Vizualizar</div>}
        </div>
      </div>

    </>
  )
}

//temos que fazer um if e else para renderixar um component especifico
//vamos fazer os componentes em outra pasta ent