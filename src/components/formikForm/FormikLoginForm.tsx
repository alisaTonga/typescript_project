import { useFormik } from 'formik'
import styles from './formik.module.css'

interface IFormValues{
  firstName: string,
  lastName: string,
  email: string
}

export default function FormikLoginForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    } as IFormValues,
    onSubmit: (values: IFormValues, {resetForm})=> {
      console.log(values);
      resetForm();
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <input name='firstName' value={formik.values.firstName} 
      onChange={formik.handleChange} type="text" placeholder='First name' />

      <input name='lastName' value={formik.values.lastName} 
      onChange={formik.handleChange} type="text" placeholder='last name'/>

      <input  name='email' value={formik.values.email}
      onChange={formik.handleChange} type="text" placeholder='email'/>

      <button type="submit">send</button>
      
      </form>
  )
}