import React, { createContext, useState } from "react";
import {links} from


interface ProfileContextType{
                    name:string;
                    github:string;
                    linkedin:string;
                    instagram:string;
                    tiktok:string;
                    facebook: string;
                    youtube: string;
                    links: CustomLink[];

                    setName:{name: string} => void;
                    setGithub:{github: string} => void;
                    setLinkedin:{linkedin: string} => void;
                    setInstagram:{instagram: string} => void;
                    setTikTok:{tiktok: string} => void;
                    setFacebook:{facebook: string} => void;
                    setYoutube:{youtube: string} => void;

                    handleAddLink: () => void;
                    handleLeLinkChange: (index: number, field: string, value: string)=> void;
                    
}

interface ProfileProviderProps{
    children : React.ReactNode
}

const ProfileContext = createContext<ProfileContextType | undefined>((undefined));

export const ProfileProvider = ({children}: ProfileProviderProps)=>{
     const [name, setName] = useState("Zezinho");
    
        const [github, setGithub] = useState("");
        const [linkedin, setLinkedin] = useState("");
        const [instagram, setInstagram] = useState("");
        const [tiktok, setTiktok] = useState("");
        const [facebook, setFacebook] = useState("");
        const [youtube, setYoutube] = useState("");
    
        const [links, setLinks] = useState<CustomLink[]>([]);
    
        const handleAddLink = () => {
            setLinks([...links, { name: "", url: "" }]);
        };
    
        const handleLinkNameChange = (index: number, value: string) => {
            const newLinks = [...links];
            newLinks[index].name = value;
            setLinks(newLinks);
        };
    
        const handleLinkUrlChange = (index: number, value: string) => {
            const newLinks = [...links];
            newLinks[index].url = value;
            setLinks(newLinks);
        };

        return(
            <ProfileContext.Provider value={{
                name, github, linkedin, tiktok,facebook, youtube, instagram,
                setName,setGithub,setLinkedin,setTiktok,setFacebook,setYoutube,setInstagram
                ,handleAddLink,handleLinkNameChange,handleLinkUrlChange
            }}>

                {children}

            </ProfileContext.Provider>
        );
        
    export const useProfile = () =>{
        
    }


}