import MyButton from "../myButton/myButton";
import MyInput from "../MyInput/MyInput";
import './loginForm.css'

export default function LoginForm(){
    const handleCancel = () => {console.log("Ok that was canceled. See you next time");}
    const handleSubmit= () => {console.log("Ok that was submitted");}
    return(
        <form className="login-form">
            <h2>Login form</h2>
            <div id="inputs">
                <label htmlFor="login">Login:
                    <br />
                    <MyInput type={'Login'} placeholder={'username'} label={'Login: '} name={'login'}/>
                </label>

                <label htmlFor="email">Email:
                    <br />
                    <MyInput type={'Email'} placeholder={'username@gmail.com'} label={'Email: '} name={'email'}/>
                </label>

                <label htmlFor="password"> Password:
                    <br />
                    <MyInput type={'Password'} placeholder={'***************'} label={'Password: '} name={'password '}/>
                </label>

            </div>
            <div id="buttons">
            <MyButton id="cancel" type={'cancel'} name={'Cancel'} onClick={handleCancel}/>
            <MyButton id="submit" type={'submit'} name={'Submit'} onClick={handleSubmit}/> 
            </div>
        </form>
    )
}