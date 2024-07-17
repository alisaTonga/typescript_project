import { useFormik } from 'formik';
import styles from './FormGender.module.css'
import { useState } from 'react';
interface IInputName{
    name: string
}

export default function FormGender() {
    const [gender, setGender] = useState('')
    const [inputName, setName] = useState('')

        const formik = useFormik({
        initialValues: {
            name: ''
        } as IInputName,
        onSubmit: (values: IInputName, {resetForm})=> {
            console.log(values);
            resetForm();

        fetch(`https://api.genderize.io/?name=${values.name}`)
                .then(res => res.json())
                .then(data => setGender(data.gender))             
                .then(data => setName(values.name))             
        }})
    return (
        <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <h4>Enter name: </h4>
        <input name='name' value={formik.values.name} 
        onChange={formik.handleChange} type="text" placeholder='Name' />
        <button type="submit">send</button>
        <span>Name: {inputName} <br />Gender: {gender}</span>
        </form>
    )
}
