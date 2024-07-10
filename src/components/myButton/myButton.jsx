import './myButton.css'
export default function MyButton({type, onClick, name}){
    return <button type={type} onClick={onClick} className='myButton'>{name}</button>
}