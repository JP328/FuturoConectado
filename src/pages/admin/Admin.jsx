/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Admin() {

  const navigate = useNavigate();

  const buttonsStyles = "w-4/5 border border-black p-2 text-center my-2 duration-300 hover:bg-originBlue hover:text-white cursor-pointer"

  const data = useSelector((state) => state.userData.data)

  useEffect(() => {
    data.id === '' && navigate("/")
  }, [data.id])

  console.log(data.id);

  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col justify-center items-center bg-originLight">
        <h1 className="text-5xl my-5">Seja Bem Vindo Administrador!</h1>
        <h2 className='text-xl'>Essa é a sua área para adminstrar as informações e usuários de todo o site.</h2>

        <div className="w-4/5 flex justify-between text-xl mt-24">
          <ul className="w-1/2 flex flex-col justify-between transition-all">
            <li className={buttonsStyles}>
              <Link to={`/editarUsuario/${data.id}`} >Atualizar Informações</Link>
            </li>
            <li className={buttonsStyles}>Cadastrar Eventos</li>
            <li className={buttonsStyles}>Visualizar Usuários</li>
            <li className={buttonsStyles}>Deletar um Usuário</li>
          </ul>
        </div>
      </div>
    </>
  )
}
