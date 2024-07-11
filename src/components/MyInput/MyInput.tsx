interface IMyInput {
    type: string
    placeholder?: string
    label: string
    name: string
}

export default function MyInput({type,placeholder,label,name}:IMyInput){
    return(
        <>
        <label className={label}>{label} <br /></label>
        <input className="my_Input" type={type}  placeholder = {placeholder} name={name}/>
        </>
    )
}