import { useState } from "react";
import { Input } from "./Input"

export const EditPage = () => {

    const [name, setName]=useState("Lucas Soler");


    return (
        <div >
            <div className="container mx-auto flex">

                <main className="w-9/12 bg-red-800 h-screen p-4 ">

                    <form className=" space-y-4">
                        <Input name="Nome" id="name" placerholder="EX: Lucas" />
                        <Input name="GitHub" id="github" placerholder="EX: Lschanhi" />

                        <div className=" grid grid-cols-3 gap-4">
                            <Input name="Linkedin" id="linkedin" placerholder="EX: Lucas/in" />
                            <Input name="Instagram" id="instagram" placerholder="EX: @Lschanhi" />
                            <Input name="TikTok" id="tiktok" placerholder="EX: Lucas" />
                            <Input name="FaceBook" id="facebook" placerholder="EX: Lschanhi" />
                            <Input name="Youtube" id="youtube" placerholder="EX: Lucas" />
                        </div>


                    </form>
                </main>
                <aside className="w-3/12 bg-red-300 h-screen">

                    Seu nome : 
                </aside>

            </div>


        </div>

    )
}