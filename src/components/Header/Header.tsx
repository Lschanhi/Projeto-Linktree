import { Logo } from "./Logo"
import { Menu } from "./Menu"

export function Header(){

    return (

        <header className="bg-[#D3AF37] py-4 px-8 text-white ">
                <div className=" container  mx-auto flex justify-between items-center">
                    <Logo/>

                    <Menu/>
                </div>



                <div></div>


        </header>

    )

}