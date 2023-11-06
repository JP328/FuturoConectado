import { useState } from "react"
import { Link } from "react-router-dom";
import { useAddUserMutation } from "../../store";
import Header from "../../components/header/Header";

import { toast } from "react-toastify";

export default function Register() {
  const [addUser] = useAddUserMutation();

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    genero: "Masculino",
    dataDeNascimento: "",
    email: "",
    senha: "",
    cep: "",
    termoDeUso: true
  })

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event }
    })
  }

  const handleForm = async (event) => {
    try {
      event.preventDefault()
      await addUser(formData).then(res => {
        toast.success(res.error.data, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
    } catch (err) {
      toast.error("Serviço indisponível no momento! Tente mais tarde.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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
                <h3 className="pt-4 text-2xl md:text-4xl text-originLight text-center">Crie sua conta!</h3>

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
                      value={formData.nomeCompleto}
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'nomeCompleto')}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between gap-x-5">

                    <div className="mb-4 md:mb-0 w-full">
                      <label className="block mb-2 text-sm font-bold" htmlFor="genero">
                        Gênero
                      </label>
                      <select className="w-full px-3 py-2 text-sm text-slate-800 leading-tight border rounded shadow appearance-none focus:outline-none" id="genero" name="genero" 
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'genero')} >
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
                        value={formData.dataDeNascimento}
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'dataDeNascimento')}
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
                      <label className="block mb-2 text-sm font-bold" htmlFor="senha">
                        Senha
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm text-slate-800 leading-tight border rounded shadow appearance-none focus:outline-none"
                        id="senha"
                        type="password"
                        placeholder="********"
                        value={formData.senha}
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'senha')}
                      />

                    </div>

                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-originBlue rounded-full hover:bg-originBlue/90"
                      type="submit"
                    >
                      Registre sua Conta
                    </button>
                  </div>

                  {/* <div className="text-center">

                    <div className="flex items-center ">
                      <div className="flex items-center ">
                        <input id="termoDeUso" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " value={formData.termoDeUso}
                          required
                          checked={formData.termoDeUso}
                          onChange={() => handleFormEdit(!formData.termoDeUso, 'termoDeUso')} />
                      </div>
                      <div className="ml-2 text-xl">
                        <label htmlFor="termoDeUso" className="text-base font-bold">Eu concordo com os termos de uso</label>

                      </div>
                    </div>

                  </div> */}

                  <div className="text-center">
                    <Link 
                      className="inline-block text-sm text-originLight animate-bounce font-bold" 
                      to={'/login'}
                    >
                      Já tem uma conta? Faça o Login!
                    </Link>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}