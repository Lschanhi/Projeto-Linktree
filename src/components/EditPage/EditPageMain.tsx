import { Input } from "./Input";

interface CustomLink {
    name: string;
    url: string;
}

interface EditPageMainProps {
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    youtube: string;
    links: CustomLink[];
    onNameChange: (value: string) => void;
    onGithubChange: (value: string) => void;
    onLinkedinChange: (value: string) => void;
    onInstagramChange: (value: string) => void;
    onTiktokChange: (value: string) => void;
    onFacebookChange: (value: string) => void;
    onYoutubeChange: (value: string) => void;
    onAddLink: () => void;
    onLinkNameChange: (index: number, value: string) => void;
    onLinkUrlChange: (index: number, value: string) => void;
}

export function EditPageMain(props: EditPageMainProps) {
    return (
        <main className="w-full lg:w-8/12 bg-[#101010] min-h-screen p-4">
            <form className="space-y-4 max-w-4xl mx-auto" onSubmit={(event) => { event.preventDefault(); }}>
                <div className="rounded-xl border border-[#4f3f12] bg-black p-4">
                    <h1 className="text-2xl text-white font-bold">Editor do Techlinks</h1>
                    <p className="text-sm text-[#b8b8b8] mt-1">Preencha os campos para atualizar o preview.</p>
                </div>

                <div className="rounded-xl border border-[#4f3f12] bg-black p-4 space-y-4">
                    <Input
                        name="Nome"
                        id="name"
                        placerholder="EX: Lucas"
                        value={props.name}
                        onChange={(event) => { props.onNameChange(event.target.value); }}
                    />
                </div>

                <div className="rounded-xl border border-[#4f3f12] bg-black p-4 space-y-4">
                    <p className="text-[#d4af37] font-bold uppercase">Redes sociais</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            name="GitHub"
                            id="github"
                            placerholder="EX: Lschanhi"
                            value={props.github}
                            onChange={(event) => { props.onGithubChange(event.target.value); }}
                        />

                        <Input
                            name="Linkedin"
                            id="linkedin"
                            placerholder="EX: Lucas/in"
                            value={props.linkedin}
                            onChange={(event) => { props.onLinkedinChange(event.target.value); }}
                        />

                        <Input
                            name="Instagram"
                            id="instagram"
                            placerholder="EX: @Lschanhi"
                            value={props.instagram}
                            onChange={(event) => { props.onInstagramChange(event.target.value); }}
                        />

                        <Input
                            name="TikTok"
                            id="tiktok"
                            placerholder="EX: Lucas"
                            value={props.tiktok}
                            onChange={(event) => { props.onTiktokChange(event.target.value); }}
                        />

                        <Input
                            name="FaceBook"
                            id="facebook"
                            placerholder="EX: Lschanhi"
                            value={props.facebook}
                            onChange={(event) => { props.onFacebookChange(event.target.value); }}
                        />

                        <Input
                            name="Youtube"
                            id="youtube"
                            placerholder="EX: Lucas"
                            value={props.youtube}
                            onChange={(event) => { props.onYoutubeChange(event.target.value); }}
                        />
                    </div>
                </div>

                <div className="rounded-xl border border-[#4f3f12] bg-black p-4 space-y-4">
                    <p className="text-[#d4af37] font-bold uppercase">Links personalizados</p>

                    {
                        props.links.map((link, index) => {
                            return (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#4f3f12] rounded-lg p-3">
                                    <Input
                                        name={"Link " + (index + 1)}
                                        id={"link-" + index}
                                        value={link.name}
                                        placerholder="EX: Portfolio"
                                        onChange={(event) => {
                                            props.onLinkNameChange(index, event.target.value);
                                        }}
                                    />

                                    <Input
                                        name="URL do Link"
                                        id={"link-url-" + index}
                                        value={link.url}
                                        placerholder="EX: https://meusite.com"
                                        onChange={(event) => {
                                            props.onLinkUrlChange(index, event.target.value);
                                        }}
                                    />
                                </div>
                            );
                        })
                    }

                    <button
                        type="button"
                        className="bg-[#d4af37] text-black rounded-lg cursor-pointer uppercase px-4 py-2 font-bold hover:opacity-90 transition-opacity"
                        onClick={props.onAddLink}
                    >
                        Adicionar Links
                    </button>
                </div>
            </form>
        </main>
    );
}
