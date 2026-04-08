import type React from "react";

interface InputProps{
    name: string;
    id: string;
    type?: string;
    placerholder?: string;
    value: string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input(props:InputProps) {

    return (

        <div className="space-y-2">

        <label htmlFor={props.id} className="text-sm font-bold uppercase text-[#d4af37]">{ props.name }</label>
        <input type={props.type || "text"} id ={props.id} name={props.name} placeholder={props.placerholder ||""}
        value={props.value}
        onChange={props.onChange}
         className="bg-[#1b1b1b] text-white text-base px-4 py-2 border border-[#4f3f12] rounded-lg block w-full placeholder:text-[#8b8b8b] focus:outline-none focus:border-[#d4af37]" />
        
        </div>
    )
}
