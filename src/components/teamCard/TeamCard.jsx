/* eslint-disable react/prop-types */
export default function TeamCard(props) {
  return (
    <> 
      <div className="w-[350px] h-[400px] max-sm:w-[300px] lg:w-[400px] lg:h-[500px] overflow-hidden transition relative rounded-lg">
        <img src={props.img} className="w-full" alt="Membro da equipe" />
        <div 
          className="w-full flex flex-col justify-center bg-originBlue absolute -bottom-[10%] hover:bottom-0 rounded-lg shadow-md shadow-black transition-all duration-300">
          <h3 className="text-center mb-6 md:mb-3 text-2xl max-lg:text-4xl max-xl:text-lg">
            {props.name}
          </h3>
          <p className="text-justify text-base sm:text-lg lg:text-sm xl:text-lg px-4 mb-3">
            {props.description}
          </p>
        </div>
      </div>
    </>
  )
}