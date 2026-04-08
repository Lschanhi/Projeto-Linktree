import { useState } from "react";
import { EditPageMain } from "./EditPageMain";
import { EditPagePreview } from "./EditPagePreview";

interface CustomLink {
    name: string;
    url: string;
}

export const EditPage = () => {
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

    return (
        <div className="min-h-screen bg-black py-4">
            <div className="container mx-auto flex flex-col lg:flex-row gap-4">
                <EditPageMain
                    name={name}
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    tiktok={tiktok}
                    facebook={facebook}
                    youtube={youtube}
                    links={links}
                    onNameChange={setName}
                    onGithubChange={setGithub}
                    onLinkedinChange={setLinkedin}
                    onInstagramChange={setInstagram}
                    onTiktokChange={setTiktok}
                    onFacebookChange={setFacebook}
                    onYoutubeChange={setYoutube}
                    onAddLink={handleAddLink}
                    onLinkNameChange={handleLinkNameChange}
                    onLinkUrlChange={handleLinkUrlChange}
                />

                <EditPagePreview
                    name={name}
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    tiktok={tiktok}
                    facebook={facebook}
                    youtube={youtube}
                    links={links}
                />
            </div>
        </div>
    );
};
