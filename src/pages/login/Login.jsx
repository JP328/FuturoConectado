import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

import Header from "../../components/header/Header";
import { addUser } from "../../store";

export default function LoginPage() {

  const dispatch = useDispatch();
  const usuarioFake = {
    id: '1',
    fullName: 'João',
    gender: 'Masculino',
    birthdate: '2000-10-10',
    email : 'joao@gmail.com',
    cep : '00000-000',
    password: 'joao123',
    isAdmin: true
  }
  
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  
  const handleForm = (event, name) => {
    setLoginData((prevState) => {
      return { ...prevState, [name] : event}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(addUser({...usuarioFake}));
    
    usuarioFake.isAdmin ? navigate('/administrador') : navigate('/usuario')
  }

  return(
    <>
      <Header />
      <div className="bg-gradient-to-tr from-originRed/90 to-originBlue/70 relative h-full w-full flex justify-center">
        <img 
          src="/img/annie-spratt-QckxruozjRg-unsplash.jpg" 
          alt="Pessoas reunidas em uma mesa com computadores e cadernos." 
          className="-z-10 absolute w-full h-full object-cover"
        />

        <div className="w-full xl:w-3/4 lg:w-11/12 md:w-4/5 relative my-20 flex justify-center">  
          <div className="w-full lg:w-7/12 p-5 rounded-lg mt-5">
            <h1 className="text-4xl max-sm:text-2xl text-white text-center mb-2">
              Bem vindo a Futuro Conectado!
            </h1>
            <h2 className="text-3xl max-sm:text-xl text-white text-center mb-12 ">Faça seu Login na plataforma!</h2>

            <form className="px-8 pb-8 mb-4 border border-white rounded backdrop-blur shadow-sm shadow-white drop-shadow-xl" onSubmit={handleSubmit}>
              <div className="my-4">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white font-bold placeholder:font-normal placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => handleForm(e.target.value, "email")}
                  autoComplete="off"
                  required
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="mb-4 ">
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="senha">
                    Senha
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="senha"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => handleForm(e.target.value, "password")}
                    required
                    placeholder="********"
                  />
                </div>
              </div>

              <div className="my-4 text-center">
                <button
                  className="w-2/3 px-4 py-2 font-bold text-white border border-white rounded-full hover:border-blue-200 hover:text-blue-200 focus:shadow-outline"
                  type="submit"                
                >
                  Entrar
                </button>
              </div>
              
              <div className="text-center">
                <Link 
                  className="inline-block text-sm font-semibold text-white hover:text-slate-200 hover:font-normal appearance-none focus:outline-none" 
                  to={'/cadastre-se'}
                >
                  Você ainda não tem uma conta? Cadastre-se!
                </Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}