interface CustomLink {
    name: string;
    url: string;
}

interface EditPagePreviewProps {
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    youtube: string;
    links: CustomLink[];
}

function getUrl(value: string, baseUrl: string, useAt: boolean) {
    const text = value.trim();

    if (text === "") {
        return "";
    }

    if (text.startsWith("http://") || text.startsWith("https://")) {
        return text;
    }

    const userName = text.replace("@", "").replace("in/", "");

    if (useAt) {
        return baseUrl + "@" + userName;
    }

    return baseUrl + userName;
}

function getCustomUrl(value: string) {
    const text = value.trim();

    if (text === "") {
        return "";
    }

    if (text.startsWith("http://") || text.startsWith("https://")) {
        return text;
    }

    return "https://" + text;
}

export function EditPagePreview(props: EditPagePreviewProps) {
    const userName = props.name.trim() !== "" ? props.name : "Seu Nome";

    const githubUrl = getUrl(props.github, "https://github.com/", false);
    const linkedinUrl = getUrl(props.linkedin, "https://linkedin.com/in/", false);
    const instagramUrl = getUrl(props.instagram, "https://instagram.com/", false);
    const tiktokUrl = getUrl(props.tiktok, "https://www.tiktok.com/", true);
    const facebookUrl = getUrl(props.facebook, "https://facebook.com/", false);
    const youtubeUrl = getUrl(props.youtube, "https://youtube.com/", true);

    const customLinks = props.links.filter((link) => {
        return link.name.trim() !== "" || link.url.trim() !== "";
    });

    return (
        <aside className="w-full lg:w-4/12 min-h-screen bg-black p-4">
            <div className="mx-auto max-w-sm rounded-xl border border-[#4f3f12] bg-[#0a0a0a] overflow-hidden">
                <div className="flex items-center justify-center px-4 py-3 border-b border-[#4f3f12] text-[#d4af37]">
                    
                    <p className=" text-sm uppercase font-bold text-center">TECHLINKS</p>
                   
                </div>

                <div className="px-4 py-5 space-y-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">{userName}</h2>
                    </div>

                    <div className="space-y-2">
                        <div className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                            <p className="text-white font-semibold">GitHub</p>
                            {
                                githubUrl !== "" ? (
                                    <a href={githubUrl} target="_blank" rel="noreferrer" className="text-xs text-[#b89945] underline break-all">
                                        {props.github}
                                    </a>
                                ) : (
                                    <p className="text-xs text-[#7f6826]">Sem link</p>
                                )
                            }
                        </div>

                        <div className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                            <p className="text-white font-semibold">Linkedin</p>
                            {
                                linkedinUrl !== "" ? (
                                    <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-xs text-[#b89945] underline break-all">
                                        {props.linkedin}
                                    </a>
                                ) : (
                                    <p className="text-xs text-[#7f6826]">Sem link</p>
                                )
                            }
                        </div>

                        <div className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                            <p className="text-white font-semibold">Instagram</p>
                            {
                                instagramUrl !== "" ? (
                                    <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-xs text-[#b89945] underline break-all">
                                        {props.instagram}
                                    </a>
                                ) : (
                                    <p className="text-xs text-[#7f6826]">Sem link</p>
                                )
                            }
                        </div>

                        <div className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                            <p className="text-white font-semibold">TikTok</p>
                            {
                                tiktokUrl !== "" ? (
                                    <a href={tiktokUrl} target="_blank" rel="noreferrer" className="text-xs text-[#b89945] underline break-all">
                                        {props.tiktok}
                                    </a>
                                ) : (
                                    <p className="text-xs text-[#7f6826]">Sem link</p>
                                )
                            }
                        </div>

                        <div className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                            <p className="text-white font-semibold">FaceBook</p>
                            {
                                facebookUrl !== "" ? (
                                    <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-xs text-[#b89945] underline break-all">
                                        {props.facebook}
                                    </a>
                                ) : (
                                    <p className="text-xs text-[#7f6826]">Sem link</p>
                                )
                            }
                        </div>

                        <div className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                            <p className="text-white font-semibold">Youtube</p>
                            {
                                youtubeUrl !== "" ? (
                                    <a href={youtubeUrl} target="_blank" rel="noreferrer" className="text-xs text-[#b89945] underline break-all">
                                        {props.youtube}
                                    </a>
                                ) : (
                                    <p className="text-xs text-[#7f6826]">Sem link</p>
                                )
                            }
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-[#d4af37] text-sm uppercase font-bold">Links personalizados</p>

                        {
                            customLinks.length === 0 ? (
                                <div className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                                    <p className="text-xs text-[#7f6826]">Nenhum link adicionado</p>
                                </div>
                            ) : (
                                customLinks.map((link, index) => {
                                    const title = link.name.trim() !== "" ? link.name : "Link " + (index + 1);
                                    const linkUrl = getCustomUrl(link.url);

                                    return (
                                        <div key={index} className="rounded-xl border border-[#4f3f12] bg-[#15120a] px-4 py-3">
                                            <p className="text-white font-semibold">{title}</p>
                                            {
                                                linkUrl !== "" ? (
                                                    <a href={linkUrl} target="_blank" rel="noreferrer" className="text-xs text-[#b89945] underline break-all">
                                                        {link.url}
                                                    </a>
                                                ) : (
                                                    <p className="text-xs text-[#7f6826]">URL nao informada</p>
                                                )
                                            }
                                        </div>
                                    );
                                })
                            )
                        }
                    </div>

                    <button
                        type="button"
                        className="w-full rounded-lg bg-[#d4af37] py-3 text-black font-bold uppercase"
                    >
                        View Portfolio
                    </button>
                </div>
            </div>
        </aside>
    );
}
