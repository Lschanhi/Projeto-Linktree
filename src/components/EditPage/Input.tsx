interface InputProps{
    name: string;
    id: string;
    type?: string;
    placerholder?: string;
}

export function Input(props:InputProps) {

    return (

        <div>

        <label htmlFor={props.id} className="text-3xl font-bold px-4 py-2 uppercase ">{ props.name }</label>
        <input type={props.type || "text"} id ={props.id} name={props.name} placeholder={props.placerholder ||""}
         className="bg-white text-2xl px-4 py-2 border-2 border-amber-300 rounded-2xl block w-full" />
        
        </div>
    )
}