import './myButton.css'

interface IMyButtonProps{
    name?: string,
    type?: 'submit' | 'reset' | 'button' 
    onClick?: () => void
}

export default function MyButton({type ='button', onClick, name = 'default'}:IMyButtonProps){
    return <button type={type} onClick={onClick} className='myButton'>{name}</button>
}