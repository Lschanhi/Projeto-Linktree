import { useState, useRef, useEffect } from 'react';

export function LoginPage() {
  {/* 

  const [isGifHover, setIsGifHover] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    setIsGifHover(true);
    audioRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsGifHover(false);
    audioRef.current?.pause();
    audioRef.current!.currentTime = 0; // Reinicia música
    // mover para a div de baixo
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  };
*/}

  return (
    <div className="min-h-screen bg-black relative group cursor-pointer overflow-hidden"
                     >

      {/* ÁUDIO - Loop automático 
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
        src="/audio/basshunter_dota.mp3"  // Coloque sua música aqui
      />*/}
      {/* Background animado 
      <div className="absolute inset-0 bg-[url('/gif/milos.gif')] bg-cover bg-center bg-no-repeat 
                      opacity-0 group-hover:opacity-100 group-hover:scale-110
                      transition-all  ease-out" />*/}

      <div className="relative flex flex-col min-h-screen max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center p-6 justify-between border-b-4 border-[#D3AF37]
                        bg-black/80 backdrop-blur-sm">
          <h2 className="text-[#D3AF37] text-2xl md:text-3xl font-bold text-center
                         uppercase tracking-widest flex-1">
            TECHLINKS
          </h2>
        </div>

        {/* Container Principal - Centralizado */}
        <div className="flex-1 flex flex-col justify-center items-center py-12 px-4">
          {/* Logo Background */}
          <div className="w-full max-w-10xl h-64 md:h-65 mb-12 bg-center bg-no-repeat bg-cover 
                          rounded-2xl border-4 border-[#D3AF37] mx-auto bg-[url('/imgs/Omnimarket.jpg')]
                           shadow-2xl" />

          {/* Título */}
          <h1 className="text-center text-3xl md:text-5xl uppercase font-bold text-[#D3AF37] mb-16 
                        tracking-widest bg-black/50 px-8 py-6 rounded-xl">
            Bem Vindo ao Techlinks
          </h1>

          {/* Formulário */}
          <div className="w-full max-w-10xl">
            <div className="bg-gray-900/95 border-4 border-[#D3AF37] backdrop-blur-sm max-w-4xl 
                            w-full mx-auto p-8 rounded-3xl shadow-2xl">
              <h1 className="text-center text-xl md:text-4xl uppercase font-bold text-[#D3AF37] 
                            py-12 tracking-widest">
                Entrar
              </h1>

              <input
                className="w-full bg-amber-50/90 h-14 rounded-2xl px-6 placeholder-gray-400 text-xl 
                            md:text-2xl text-center mb-6 focus:outline-none focus:ring-4 focus:ring-[#D3AF37]/30 
                            transition-all"
                type="email"
                placeholder="Digite seu email aqui"
              />

              <input
                className="w-full bg-amber-50/90 h-14 rounded-2xl px-6 placeholder-gray-400 text-xl
                           md:text-2xl text-center mb-8 focus:outline-none focus:ring-4 focus:ring-[#D3AF37]/30 
                           transition-all"
                type="password"
                placeholder="Digite sua senha aqui"
              />

              <div className="flex items-center justify-center">
                <button className="bg-[#D3AF37] text-black h-14 rounded-2xl w-full text-xl md:text-4xl 
                                  font-bold hover:bg-[#D3AF37]/90 transition-all duration-300 px-8 shadow-xl 
                                  hover:shadow-2xl transform hover:-translate-y-1">
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


{/*
function setIsGifHover(arg0: boolean) {
  throw new Error('Function not implemented.');
}
*/}