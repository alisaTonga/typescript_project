import { useFormik } from 'formik';
import styles from './FormGender.module.css'
import { useState } from 'react';
import Spinner from '../../lessons/lesson10/Spinner';
interface IInputName{
    name: string
}

export default function FormGender() {
    const [gender, setGender] = useState('')
    const [inputName, setName] = useState('')
    const [visible, setVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false);


        const formik = useFormik({
        initialValues: {
            name: ''
        } as IInputName,
        onSubmit: (values: IInputName, {resetForm})=> {
            setIsLoading(true);
            console.log(values);
            setVisible(true)
            resetForm();

        fetch(`https://api.genderize.io/?name=${values.name}`)
                .then(res => res.json())
                .then(data => { 
                    setGender(data.gender);             
                    setName(data.name)});      
                    
        setIsLoading(false);
        }})
    return (
        <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <h4>Enter name: </h4>
        <input name='name' value={formik.values.name} 
        onChange={formik.handleChange} type="text" placeholder='Name' />
        <button type="submit">send</button>
        
        <span className={`${visible ? styles.visible: styles.invisible}`}>Name: {isLoading ? <Spinner /> : inputName} <br />Gender: {isLoading ? <Spinner /> : gender}</span>

        </form>
    )
}
