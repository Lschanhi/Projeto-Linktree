import { useState } from "react"
import { Input } from "./Input"
import { Link } from "@tanstack/react-router";

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {

    const [name, setName] = useState("Zezinho");
    const [Links, setLinks] = useState<Link[]>([]);
    const handleAddLink = () =>{setLinks([...Links,{name:"", url:""}])};
    const handleLeLinkChange = (index: number, field: string, value:string)=>{
        const updatesLinks = [...Links];
        
        updatesLinks[index] = {...updatesLinks[index],[field]: value,};
        setLinks(updatesLinks);
    };


    return (
        <div >
            <div className="container mx-auto flex">

                <main className="w-9/12 bg-red-800 h-screen p-4 ">

                    <form className=" space-y-4" onSubmit={(event) => {event.preventDefault();}}>
                        <Input name="Nome" id="name" placerholder="EX: Lucas" value={name} onChange={(event) => { setName(event.target.value); }} />
                        <Input name="GitHub" id="github" placerholder="EX: Lschanhi" value={""} />

                        <div className=" grid grid-cols-2 gap-4">
                            <Input name="Linkedin" id="linkedin" placerholder="EX: Lucas/in" value={""} />
                            <Input name="Instagram" id="instagram" placerholder="EX: @Lschanhi" value={""} />
                            <Input name="TikTok" id="tiktok" placerholder="EX: Lucas" value={""} />
                            <Input name="FaceBook" id="facebook" placerholder="EX: Lschanhi" value={""} />
                            <Input name="Youtube" id="youtube" placerholder="EX: Lucas" value={""} />
                        </div>

                        <div className="space-y-4">
                            {
                                Links.map((link, index) => {
                                    return (
                                        <div className="flex grid grid-cols-2 gap-4">
                                            <Input
                                                name={"Link" + index + 1}
                                                id={"link-" + index}
                                                value={link.name}
                                                placerholder="EX: Portifólio"
                                                onChange={(event)=>{
                                                    handleLeLinkChange(index, "name", event.target.value);
                                                }}
                                            />

                                            <Input
                                                name={"URL do Link"}
                                                id={"link-url-" + index}
                                                value={link.url}
                                                placerholder="EX: https://meusite.com"
                                                onChange={(event)=>{
                                                    handleLeLinkChange(index, "url", event.target.value);
                                                }}
                                                />
                                        </div>
                                    );
                                    
                                })

                                    
                            }
                                <button className="bg-white rounded-2xl cursor-pointer uppercase px-4 py-2
                                 hover:opacity-90 transition-opacity" 
                                 onClick={handleAddLink}>Adicionar Links</button>

                        </div>
                    </form>
                </main>
                <aside className="w-4/12 bg-red-300 h-screen">

                    Seu Nome: {name}
                </aside>

            </div>


        </div>

    )
}