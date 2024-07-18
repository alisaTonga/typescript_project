import { Form } from 'formik'
import FormikLoginForm from '../../components/robotForm/RobotForm'
import styles from './Lesson.module.css'
import FormGender from '../../components/formGender/FormGender'


export default function Lesson11() {
    return (
    <div className="lesson-container">
        <h3 className={styles.heading}>Lesson11</h3>
        <p>Formik - library for working with forms</p>
        {/* <div className={styles.loader}></div> */}
        <FormGender />
    </div>
    )
}
