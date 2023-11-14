import { useState } from 'react'

export default function CadastrarVideo() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [link, setLink] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    try {
      console.log(titulo)
      console.log(descricao)
      console.log(link)
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <form className="flex flex-col justify-between items-center w-1/2 m-auto  h-full" onSubmit={handleSubmit} >
        <div className="flex w-full gap-x-20">

          <div className="flex w-1/2  flex-col">
            <label
              className="text-xl"
              htmlFor="titulo"
            >
              Titulo:
            </label>
            <input
              className=" border-black border p-2 pl-1"
              type="text"
              id="titulo"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
              placeholder="Digite o titulo do seu video"
            />
          </div>
          <div className="flex w-1/2  flex-col">
            <label
              className="text-xl"
              htmlFor="link"
            >
              Link:
            </label>
            <input
              className=" border-black border p-2 pl-1"
              type="text"
              id="link"
              value={link}
              onChange={e => setLink(e.target.value)}
              placeholder="Coloque aqui o link do seu vídeo"
            />
          </div>

        </div>

        <div className="flex flex-col w-full">
          <label
            className="text-xl"
            htmlFor="descricao"
          >
            Descrição:
          </label>
          <textarea
            className="resize-none border-black border p-2 pl-1"
            id="descricao"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            placeholder="Digite a descrição do seu vídeo"
            rows="5"
            cols="33"
          ></textarea>
        </div>

        <button type="submit" className="w-2/5 border border-black p-2 text-center duration-300 hover:bg-originBlue hover:text-white row-span-1 cursor-pointer">Mandar Video</button>
      </form>
    </>
  )
}
