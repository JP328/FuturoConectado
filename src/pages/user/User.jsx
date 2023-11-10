/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function User() {

  const navigate = useNavigate();

  const buttonsStyles = "w-4/5 border border-black p-2 text-center my-2 duration-300 hover:bg-originBlue hover:text-white cursor-pointer"

  const { id, name, email, password } = useSelector((state) => {
    return {
      id : state.userData.data.id,
      name : state.userData.data.name,
      email : state.userData.data.email,
      password : state.userData.data.password,
    }
  })

  useEffect(() => {
    id === '' && navigate("/")
  }, [id])

  console.log(id, name, email, password);

  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col justify-center items-center bg-originLight">
        <h1 className="text-5xl my-5">Seja Bem Vindo(a)!</h1>
        <h2 className='text-xl'>Essa é a sua área pessoal para adminstrar suas informações.</h2>

        <div className="w-4/5 flex justify-between text-xl mt-24">
          <ul className="w-1/2 flex flex-col justify-between transition-all">
            <li className={buttonsStyles}>
              <Link to={`/editarUsuario/${id}`} >Atualizar Informações</Link>
            </li>
            <li className={buttonsStyles}>Cadastrar Video</li>
            <li className={buttonsStyles}>Visualizar meus videos</li>
          </ul>
          <div className='w-1/2 flex flex-col items-center text-5xl'>
            <h3>Evento atual:</h3>
            <p>10 dias Restantes</p>
          </div>
        </div>
      </div>
    </>
  )
}
