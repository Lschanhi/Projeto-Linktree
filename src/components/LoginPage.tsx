import { useState, useRef } from 'react';

export function LoginPage() {
  const [isGifHover, setIsGifHover] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    setIsGifHover(true);
    audioRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsGifHover(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="min-h-screen bg-black relative group cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ÁUDIO - Loop automático */}
     {/*  <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
        src="/audio/basshunter_dota.mp3"
      /> */}

      {/* Background animado */}
      <div
        className="absolute inset-0 bg-[url('/gif/milos.gif')] bg-cover bg-center bg-no-repeat 
        opacity-0 group-hover:opacity-100 group-hover:scale-110
        transition-all duration-500 ease-out"
      />

      <div className="relative flex flex-col min-h-screen max-w-6xl mx-auto p-4">
        {/* Header */}

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col justify-center items-center py-12 px-4">
          <div className="w-full max-w-10xl h-64 md:h-65 mb-12 bg-center bg-no-repeat bg-cover 
                          rounded-2xl border-4 border-[#D3AF37] mx-auto bg-[url('/imgs/Omnimarket.jpg')]
                          shadow-2xl" />

          <h1 className="text-center text-3xl md:text-5xl uppercase font-bold text-[#D3AF37] mb-16 
                        tracking-widest bg-black/50 px-8 py-6 rounded-xl">
            Bem Vindo ao Techlinks
          </h1>

          <div className="w-full max-w-10xl">
            <div className="bg-gray-900/95 border-4 border-[#D3AF37] backdrop-blur-sm max-w-4xl 
                            w-full mx-auto p-8 rounded-3xl shadow-2xl">
              <h1 className="text-center text-xl md:text-5xl uppercase font-bold text-[#D3AF37] 
                            py-6 tracking-widest mb-6">
                Entrar
              </h1>

              <input
                className="w-full bg-amber-50/90 h-14 rounded-2xl px-6 text-xl text-center mb-12 "
                type="email"
                placeholder="Digite seu email aqui"
              />

              <input
                className="w-full bg-amber-50/90 h-14 rounded-2xl px-6 text-xl text-center mb-8"
                type="password"
                placeholder="Digite sua senha aqui"
              />

              <button className="bg-[#D3AF37] text-black h-14 rounded-2xl w-full text-xl md:text-4xl 
                                font-bold hover:bg-[#D3AF37]/90 transition-all duration-300">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}