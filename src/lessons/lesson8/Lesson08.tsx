import LoginForm from "../../components/loginForm/LoginForm";
import MyButton from "../../components/myButton/myButton";
import MyInput from "../../components/MyInput/MyInput";


const Lesson08 = ()=> {
    return(
        <div className="lesson-container">
            <h3>Lesson 8</h3>
            <p>The same MyInput, but with different info</p>
            <MyInput />
            <MyInput name="password" label="pass" placeholder="type your password" />
            <h4>CSS modules</h4>
            <p>Method writing isolated CSS styles in React; so styles won't conflict with each other</p>
            <div>
                <MyButton />
                <LoginForm />
            </div>
        </div>
    )
}
export default Lesson08;