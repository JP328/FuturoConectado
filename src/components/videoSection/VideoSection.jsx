import { useEffect, useRef, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

export default function VideoSection() {

  const carousel = useRef();

  const [width, setWidth] = useState();
  const [index, setIndex] = useState(0);
  const [ videoLoading, setVideoLoading] = useState(true);

  const recentUploads = [
    "https://youtu.be/cRlYOHIwUGw?si=-VpY5vKLIFgwIhhh",
    "https://youtu.be/mt1mXwBLsSE?si=vyOJETqfPutmD1zK",
    "https://youtu.be/cRlYOHIwUGw?si=-VpY5vKLIFgwIhhh",
    "https://youtu.be/mt1mXwBLsSE?si=vyOJETqfPutmD1zK",
    "https://youtu.be/cRlYOHIwUGw?si=-VpY5vKLIFgwIhhh",
    "https://youtu.be/mt1mXwBLsSE?si=vyOJETqfPutmD1zK"
  ]

  const handleVideoLoading = ( ) => {
    setVideoLoading((prev) => !prev)
  }

  const handleCarouselArrows = (direction) => {
    const scrollValue = width / 5;

    if (direction === 1) {
      console.log(index, width);
      setIndex((prev) => {
        if (prev < width) {
          return prev += scrollValue 
        } else {
        return prev
        }
      })
    } else {
      setIndex((prev) => {
        if (prev > 0) {
           return prev -= scrollValue 
        } else {
         return prev
        }
       })
    }
  }

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])

  return (
    <>
      <h2 className="text-center text-originLight text-5xl max-sm:text-2xl my-8">Apoie projetos incriveís!</h2>
      <p className="text-justify text-originLight text-2xl max-sm:text-xl mx-8 lg:mx-10 ">
        Conheça projetos engajados com causas sociais e vote no seu preferido para ajudar a torna-lo real! Não perca tempo. Abaixo você pode conferir os projetos recentemente submetidos, para ver todos acesse clique no botão abaixo.
      </p>
      <motion.div 
        ref={carousel} 
        className="overflow-hidden w-11/12 focus:outline-none appearance-none relative"
      >
        <BsArrowRightCircleFill 
          size='3rem'
          onClick={() => handleCarouselArrows(1)} 
          className="text-originLight cursor-pointer absolute top-1/2 right-0 z-10"/>

        <BsArrowLeftCircleFill 
          size='3rem' 
          onClick={() => handleCarouselArrows(0)} 
          className="text-originLight cursor-pointer absolute top-1/2 z-10"/>
        
        <motion.div 
          className="flex mt-8"
          dragConstraints={{right: 0, left: -width}}
          animate={{ x: `-${index}px`}}
          transition={{duration: 0.8}}             
        >
          {recentUploads.map((video, index) => (
              <motion.div 
                key={video + index} 
                className="relative py-8 pt-[25.25%] pr-[50.25%] max-sm:pt-[40.25%] max-sm:pr-[80.25%] mx-4 w-full flex items-center justify-center">
                {
                  videoLoading ?
                    <BiLoader size="4rem" className="absolute top-[36%] left-[42%] animate-spin text-originLight"/>
                  : null
                }
                <ReactPlayer 
                  className="absolute top-0 left-0 mx-2" 
                  width='100%' 
                  height="100%" 
                  url={video}
                  onReady={handleVideoLoading} />
              </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </>
  )
}