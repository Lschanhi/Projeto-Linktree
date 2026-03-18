export function LoginPage() {

  return (
    <div className="bg-[#000000] min-h-screen font-display border-4 border-[#D3AF37] 
                      hover:bg-[url('/imgs/milos.gif')] 
                      bg-cover bg-center bg-no-repeat transition-all duration-500">

      <div className="relative flex h-auto flex-col bg-[#000000] ">

        <div className="flex items-center bg-[#000000] p-6 justify-between border-b-4 border-[#D3AF37]">

          <h2 className="text-[#d4af37] text-3xl font-bold leading-tight 
                          flex-1 text-center uppercase tracking-widest">TECHLINKS</h2>

        </div>

        <div className="flex-1 flex flex-col justify-full px-70 py-8">

          <div className="min-w-125 bg-center bg-no-repeat bg-cover rounded-2xl min-h-100 
                            border-4 border-[#D3AF37] mx-auto bg-[url('/imgs/Omnimarket.jpg')]">

          </div>
          <div className="flex-1 text-center text-5xl uppercase font-bold text-[#D3AF37] p-20
                          tracking-widest">
            <h1>Bem Vindo ao Techlinks</h1>

          </div>

          <div className="bg-gray-900 border-4 border-[#D3AF37] min-w-100  px-8 py-8">

            <h1 className="text-center text-xl uppercase font-bold text-[#D3AF37] py-6 tracking-widest">
              
              Email
              
              </h1>

            <input className="flex bg-amber-50 h-14 rounded-xl w-full max-w-xl mx-auto py-8 
                              placeholder:grayscale-50 text-2xl text-center "
                   type="email" placeholder="Digite seu email aqui" />

              <h1 className="text-center text-xl uppercase font-bold text-[#D3AF37] py-6 tracking-widest">
              
              Senha
              
              </h1>

            <input className="flex bg-amber-50 h-14 rounded-xl w-full max-w-xl mx-auto py-8 placeholder:grayscale-50 text-2xl text-center"
                   type="email" placeholder="Digite sua senha aqui" />

            <div className="flex items-center justify-center py-8">
            
              <button className=" text-[#000000] bg-[#D3AF37] h-14 rounded-xl  w-full max-w-xl mx-auto text-2xl font-bold "> Entrar</button>

            </div>


          </div>

         

        </div>


      </div>
    </div>
  )
}


