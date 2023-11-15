import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAddUserMutation, useUpdateUserMutation } from "../../store";
import Header from "../../components/header/Header";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Register() {

  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const navigate= useNavigate();
  const { id } = useParams();

  const data = useSelector((state) => state.userData.data)

  const [formData, setFormData] = useState(data)

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event }
    })
  }

  const handleForm = async (event) => {
    event.preventDefault()
    if (id) {
      await updateUser(formData).then(res => {
        console.log(res);
        if (res.error.status === "FETCH_ERROR") {
          toast.error("Serviço indisponível no momento! Tente mais tarde.", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success(res.error.data, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }).catch((err) => console.log(err))
      navigate('/usuario')

    } else {
      await addUser(formData).then(res => {
        if (res.error.status === "FETCH_ERROR") {
          toast.error("Serviço indisponível no momento! Tente mais tarde.", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success(res.error.data, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/login')
        }
      }).catch((err) => console.log(err))
    }
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-tr from-originRed/90 to-originBlue/70 relative flex h-full">
      <img 
        src="/img/annie-spratt-QckxruozjRg-unsplash.jpg" 
        alt="Pessoas reunidas em uma mesa com computadores e cadernos." 
        className="-z-10 absolute w-full h-full object-cover"
      />
        <div className="container mx-auto max-md:mt-20 md:my-12 px-10">
          <div className="flex justify-center py-12">

            <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center" >
              <div className="w-full lg:w-9/12 bg-white/30 backdrop-blur-sm md:p-5 rounded-lg ">
                <h3 className="pt-4 text-2xl md:text-4xl text-originLight text-center">
                  {id ? "Atualize suas Informações" : "Crie sua conta"}
                </h3>

                <form
                  className="px-8 pt-6 pb-8 mb-4 rounded text-originLight"
                  onSubmit={handleForm}
                >
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold" htmlFor="name">
                      Nome Completo
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm text-slate-800 leading-tight border rounded shadow appearance-none focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.fullName}
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'fullName')}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between gap-x-5">

                    <div className="mb-4 md:mb-0 w-full">
                      <label className="block mb-2 text-sm font-bold" htmlFor="gender">
                        Gênero
                      </label>
                      <select className="w-full px-3 py-2 text-sm text-slate-800 leading-tight border rounded shadow appearance-none focus:outline-none" id="gender" name="gender" 
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'gender')} >
                        {[
                          { value: 'Masculino', text: 'Masculino' },
                          { value: 'Feminino', text: 'Feminino' },
                          { value: 'Transgênero', text: 'Transgênero' },
                          { value: 'NaoInformar', text: 'Prefiro não informar' },
                        ].map(option => (
                          <option key={option.value} value={option.value}>{option.text}</option>
                        ))}
                      </select>

                    </div>

                    <div className="w-full">
                      <label className="block mb-2 text-sm font-bold" htmlFor="dataNasc">
                        Data de Nascimento
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm text-slate-800 leading-tight border rounded shadow appearance-none focus:outline-none"
                        id="dataNasc"
                        type="date"
                        value={formData.birthdate}
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'birthdate')}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm text-slate-800 leading-tight border rounded shadow appearance-none focus:outline-none"
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'email')}
                    />
                  </div>

                  <div className="mb-4 md:flex md:justify-between gap-x-5">
                    <div className="w-full">
                      <label className="block mb-2 text-sm font-bold" htmlFor="CEP">
                        CEP
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm text-slate-800 border rounded shadow appearance-none focus:outline-none"
                        id="CEP"
                        pattern="\d{5}-\d{3}"
                        placeholder="Digite seu CEP"
                        value={formData.cep}
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'cep')}
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:flex md:justify-between gap-x-5">
                    <div className="mb-4 md:mr-2 md:mb-0 w-full">
                      <label className="block mb-2 text-sm font-bold" htmlFor="password">
                        Senha
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm text-slate-800 leading-tight border rounded shadow appearance-none focus:outline-none"
                        id="password"
                        type="password"
                        placeholder="********"
                        value={formData.password}
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'password')}
                      />

                    </div>

                  </div>

                  { !id && 
                    <div className="flex items-center text-center">
                      <div className="flex items-center ">
                        <input id="termoDeUso" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " value={formData.termoDeUso}
                          required
                          onChange={() => handleFormEdit(!formData.termoDeUso, 'termoDeUso')} />
                      </div>
                      <div className="ml-2 text-xl">
                        <label htmlFor="termoDeUso" className="text-base font-bold">Eu concordo com os termos de uso</label>

                      </div>
                    </div>
                  }

                  <div className="my-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-originBlue rounded-full hover:bg-originBlue/90"
                      type="submit"
                    >
                      {id ? "Atualizar dados" : "Registre sua Conta"}
                    </button>
                  </div>

                  {id &&
                    <div className="text-center">
                      <Link 
                        className="inline-block text-sm text-originLight font-semibold hover:font-bold transition-all duration-300" 
                        to={'/login'}
                      >
                        Já tem uma conta? Faça o Login!
                      </Link>
                    </div>
                  }
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}