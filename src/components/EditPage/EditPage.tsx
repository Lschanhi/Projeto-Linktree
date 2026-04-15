import { useState } from "react";
import { EditPageMain } from "./EditPageMain";
import { EditPagePreview } from "./EditPagePreview";



export const EditPage = () => {
   

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
