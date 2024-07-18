import { useFormik } from 'formik'
import styles from './robot.form.module.css'
import * as Yup from 'yup' 

interface IFormValues{
  model: string,
  creator: string,
  email: string
}

const schema = Yup.object().shape({
  model: Yup
  .number()
  .typeError('Enter your number, Robot')
  .required('You must fill that input')
  .min(100, 'Your model should be starting with number greater than 100')
  .max(1500, 'Your model should be starting with number smaller than 1500'),

  creator: Yup
  .string()
  .required('Enter your creator family name'),

  email: Yup
  .string()
  .email('Invalid email format')
  .required('Enter your company email')
  
})
export default function RobotForm() {

  const formik = useFormik({
    initialValues: {
      model: '',
      creator: '',
      email: ''
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormValues, {resetForm})=> {
      console.log(values);
      resetForm();
    }
  })

  return (
    <>
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <label>That Robot's form 🤖</label>
      <input name='model' value={formik.values.model} 
      onChange={formik.handleChange} type="text" placeholder='Your model: ' />

      <input name='creator' value={formik.values.creator} 
      onChange={formik.handleChange} type="text" placeholder='Name of your creator: '/>

      <input  name='email' value={formik.values.email}
      onChange={formik.handleChange} type="text" placeholder='Production email'/>

      <button type="submit">send</button>
      </form>
      <span className={styles.errors}>{formik.errors.model}</span>
      <span className={styles.errors}>{formik.errors.creator}</span>
      <span className={styles.errors}>{formik.errors.email}</span>
      </>
  )
}