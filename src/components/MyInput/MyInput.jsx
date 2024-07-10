export default function MyInput({type,placeholder,label,name}){
    return(
        <input className="my_Input" type={type}  placeholder = {placeholder} label= {label} name={name}/>
    )
}