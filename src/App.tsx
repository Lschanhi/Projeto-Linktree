function App() {
  return (
    <div className="dark:bg-black min-h-screen font-display border-4 border-[#D3AF37]">
      <div className="flex items-center dark:bg-black p-12 border-b border-[#D3AF37]">
        <h2 className="text-[#d4af37] text-3xl font-bold flex-1 text-center uppercase tracking-widest">
          TECHLINKS
        </h2>
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-full mx-auto w-full">
        <div className="mb-8">
          <div className="w-full h-62.5 rounded-xl border border-[#D3AF37]/20 relative overflow-hidden mb-8">
            <img
              src="/imgs/Omnimarket.jpg"
              alt="TechLinks Logo"
              className="w-full h-full object-top"
            />

            <div className="absolute inset-0 rounded-xl" />
            {/* Overlay para legibilidade */}
          </div>
        </div>
        <h1 className="text-3xl font-bold leading-tight pb-6 text-[#d4af37] text-center uppercase tracking-widest">
          Welcome to TechLinks
        </h1>
        <div className="space-y-4">
          <label className="flex flex-col w-full">
            <p className="text-[#d4af37] text-sm font-semibold uppercase tracking-wider pb-2 ml-1">
              E-Mail
            </p>
            <input
              className="w-full h-12 px-4 rounded-xl border border-[#D3AF37]/30 bg-white/90 placeholder:text-slate-400 text-black 
                        focus:ring-2 focus:ring-[#D3AF37] focus:border-transparent transition-all"
              placeholder="nome@compania.com"
              type="email"
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-[#d4af37] text-sm font-semibold uppercase tracking-wider pb-2 ml-1">
              Senha
            </p>
            <input
              className="w-full h-12 px-4 rounded-xl border border-[#D3AF37]/30 bg-white/90 placeholder:text-slate-400
                         text-black focus:ring-2 focus:ring-[#D3AF37] focus:border-transparent transition-all"
              placeholder="Digite Sua Senha Aqui"
              type="password"
            />
          </label>
          <button className="bg-[#d4af37] text-black font-bold h-14 rounded-xl text-lg uppercase tracking-wider w-full 
                              hover: bg-[#d4af37] hover: text-black transition-colors duration-300 shadow-lg hover:shadow-[#d4af37]/50">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
