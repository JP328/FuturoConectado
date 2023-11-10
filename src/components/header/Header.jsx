/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { CgClose } from "react-icons/cg"

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)  
  const [colorBarDefault, setColorBarDefault] = useState(props.recentUploads ? "bg-originLight/20" : "bg-originRed");
  
  const handleGoToSection = (ref) => {
    setMobileMenuOpen(false)
    ref.current?.scrollIntoView({behavior: "smooth"});
  }


  const handleColorBar = () => {
    if (props.recentUploads && props.recentUploads.current !== null) {
      props.recentUploads.current.offsetTop - 200  <= window.scrollY ?
        setColorBarDefault("bg-originRed")
      : setColorBarDefault("bg-originLight/20")
    }
  }

  window.addEventListener('scroll', handleColorBar);

  const logout = () => {}

  return (
      <header className='w-full fixed z-40 backdrop-blur' >
        <nav className={"px-4 lg:px-6 py-2.5 text-originLight transition-all duration-300 " + colorBarDefault} onScrollCapture={handleColorBar}>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            <a href="./" className="m-auto md:m-0 flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap mx-2">
                Futuro Conectado
              </span>
              {/* <img
                src="./img/music.png"
                className="mr-3 h-6 sm:h-9"
                alt="Tech Records"
              /> */}
            </a>

            <div
              className="hidden justify-around items-center w-full lg:flex lg:w-auto"
            >
              <ul className="flex flex-col gap-8 items-center max-lg:mt-4 font-medium lg:flex-row">
                <li 
                  onClick={() => handleGoToSection(props.start)}
                  className="py-2 px-4 lg:p-0 cursor-pointer hover:font-bold">
                    <Link to={"/"} >Inicio</Link>
                </li>
                <li 
                  onClick={() => handleGoToSection(props.recentUploads)} 
                  className="py-2 px-4 lg:p-0 cursor-pointer hover:font-bold">
                    <Link to={"/"} >Videos</Link>
                </li>
                <li 
                  onClick={() => handleGoToSection(props.aboutUs)} 
                  className="py-2 px-4 lg:p-0 cursor-pointer hover:font-bold">
                    <Link to={"/"} >Sobre Nós</Link>
                </li>
                <li
                  onClick={() => handleGoToSection(props.ourTeam)} 
                  className="py-2 px-4 lg:p-0 hover:font-bold cursor-pointer">
                    <Link to={"/"} >Nosso Time</Link>
                </li>
                <li
                  onClick={() => handleGoToSection(props.contact)} 
                  className="py-2 px-4 lg:p-0 hover:font-bold cursor-pointer">
                    <Link to={"/"} >Contato</Link>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center justify-between lg:order-2 w-full md:w-auto">
              {
                props.login == null ?
                  <div className="flex items-center justify-between lg:order-2 w-full md:w-auto">
                    <Link
                      to={'/login'}
                      className="text-slate-100 font-bold border shadow-sm hover:shadow-originLight/80 focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus:ring-primary-800"              
                    >
                      Login
                    </Link>
                  </div>
                :
                  props.login === true ?
                    <div className="flex items-center justify-between lg:order-2 w-full md:w-auto">
                      <Link
                        to={'/'}
                        className="text-slate-100 border shadow-sm hover:shadow-originLight/80 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus:ring-primary-800"
                        onClick={() => logout()}              
                      >
                        Logout
                      </Link>
                    </div>
                  : null
              }

              <button
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-originLight rounded-lg lg:hidden focus:outline-none focus:ring-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            
            <Dialog
              as="div"
              className="fixed z-50 lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <Dialog.Panel
                focus="true"
                className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto backdrop-blur bg-originBlue/70 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 font-semibold text-originLight"
              >
                <div className="flex items-center justify-between">
                  <div className="-m-1.5 p-1.5">
                    <h1 className="text-xl">Futuro Conectado</h1>
                  </div>
                  <button
                    type="button"
                    className="h-10 -m-2.5 rounded-md p-2.5 font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CgClose size='2rem' />
                  </button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10 text-lg flex max-sm:text-2xl max-sm:justify-center max-sm:text-center">
                    <ul className="space-y-2 py-6">
                      <li
                        onClick={() => handleGoToSection(props.start)} 
                        className="py-3 px-4 lg:p-0 cursor-pointer"
                      >
                        <Link to={"/"} >Inicio</Link>
                      </li>
                      <li
                        onClick={() => handleGoToSection(props.recentUploads)} 
                        className="py-3 px-4 lg:p-0 cursor-pointer"
                      >
                        <Link to={"/"} >Videos</Link>
                      </li>
                      <li 
                        onClick={() => handleGoToSection(props.aboutUs)} 
                        className="py-3 px-4 lg:p-0 cursor-pointer">
                        <Link to={"/"} >Sobre Nós</Link>
                      </li>
                      <li
                        onClick={() => handleGoToSection(props.ourTeam)} 
                        className="py-3 px-4 lg:p-0 cursor-pointer">
                        <Link to={"/"} >Nosso Time</Link>
                      </li>
                      <li
                        onClick={() => handleGoToSection(props.contact)} 
                        className="py-3 px-4 lg:p-0 cursor-pointer">
                        <Link to={"/"} >Contato</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </nav>
      </header>
  )
}
