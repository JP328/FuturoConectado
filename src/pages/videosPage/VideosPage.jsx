import { useState } from "react";
import Header from "../../components/header/Header";
import { AiOutlineReload } from "react-icons/ai";
import ReactPlayer from "react-player";

export default function VideosPage() {
  const [ videoLoading, setVideoLoading] = useState(true);

  const recentUploads = [
    "https://youtu.be/KO63mopvyxU?si=uB4vAozZYidNMFBU",
    "https://youtu.be/Xns_sqr_j5E?si=CrWLzGAk6NcDwzJ3",
    "https://youtu.be/PbLD3P1LUSE?si=tOxKhSG-ImKyosUK",
    "https://youtu.be/KO63mopvyxU?si=uB4vAozZYidNMFBU",
    "https://youtu.be/Xns_sqr_j5E?si=CrWLzGAk6NcDwzJ3",
    "https://youtu.be/PbLD3P1LUSE?si=tOxKhSG-ImKyosUK",
    "https://youtu.be/KO63mopvyxU?si=uB4vAozZYidNMFBU",
    "https://youtu.be/Xns_sqr_j5E?si=CrWLzGAk6NcDwzJ3",
    "https://youtu.be/PbLD3P1LUSE?si=tOxKhSG-ImKyosUK",
    "https://youtu.be/KO63mopvyxU?si=uB4vAozZYidNMFBU",
    "https://youtu.be/Xns_sqr_j5E?si=CrWLzGAk6NcDwzJ3",
    "https://youtu.be/PbLD3P1LUSE?si=tOxKhSG-ImKyosUK",
    "https://youtu.be/KO63mopvyxU?si=uB4vAozZYidNMFBU",
    "https://youtu.be/Xns_sqr_j5E?si=CrWLzGAk6NcDwzJ3",
    "https://youtu.be/PbLD3P1LUSE?si=tOxKhSG-ImKyosUK",
    "https://youtu.be/KO63mopvyxU?si=uB4vAozZYidNMFBU",
    "https://youtu.be/Xns_sqr_j5E?si=CrWLzGAk6NcDwzJ3",
    "https://youtu.be/PbLD3P1LUSE?si=tOxKhSG-ImKyosUK",
  ]

  const handleVideoLoading = ( ) => {
    setVideoLoading((prev) => !prev)
  }

  return(
    <>
      <Header />

      <div className="w-full min-h-screen flex justify-center p-10">
        <div className="h-full w-full flex flex-col">
          <h1 className="text-5xl text-center font-semibold my-14">Vote no seu vídeo favorito!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentUploads.map((video, index) => (
            <div 
              key={video + index} 
              className="relative py-10 my-3 pt-[50.25%] pr-[50.25%] max-sm:pt-[40.25%] max-sm:pr-[80.25%] mx-4 w-full flex items-center justify-center">
                {
                  videoLoading ?
                    <AiOutlineReload size="4rem" className="absolute top-[36%] left-[42%] animate-spin text-originBlue"/>
                  : null
                }
                <ReactPlayer 
                  className="absolute top-0 left-0 mx-2" 
                  width='100%' 
                  height="100%" 
                  url={video}
                  onReady={handleVideoLoading} />
                <div className="w-full -bottom-10 left-0 absolute flex justify-evenly items-center text-xl text-center">
                  <button className="text-originLight bg-originBlue hover:bg-originBlue/90 px-5 py-1 rounded-md">
                    Votar
                  </button>
                  <p className="">45 votos</p>

                </div>
            </div>
          ))}

        </div>

        </div>
      </div>
      {/* <div className="w-full absolute bottom-0 left-0 text-2xl text-originLight flex justify-around bg-originBlue">
        <p>Votos: 0</p>
        <button>Votar</button>
      </div> */}
    
    </>
  )
}