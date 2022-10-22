import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import InputText from "./InputText";


export default function SignupForm(){
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState("");
    const [isvalidEmail, setIsValidEmail] = useState(true);
    // const [form, setForm] = useState('');
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const {signUp} = useAuth();
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        if (email) {
            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        }else{
            return true
        }
    }

    useEffect(()=>{
        if (isValidEmail(email)) {
            setIsValidEmail(true);
        }else{
            setIsValidEmail(false);
        }
    }, [email]);
    async function onSubmitHandler(e){
        e.preventDefault();
        setLoading(true);
        if (password !== confirmPassword) {
            setErrors('Password not matched');
            setLoading(false);
            return;
        }


        await signUp(email, password, username);
        setErrors("");
        setLoading(false);
        navigate("/")
    }

    // const inputChangeHandler = (e) =>{
    //     const {name, value} = e.target;
    //     let data = form;
    //     data[name] = value;
    //     setForm(data);
    // }


    return(
        <Form style={{ height: "500px" }} onSubmit={onSubmitHandler}>
            <InputText name="username" value={username} required type={'text'} placeholder={'Enter name'} icon={'person'} onChange={(e) => setUsername(e.target.value)} />

            <InputText name="email" value={email} required type={'text'} placeholder={'Enter email'} icon={'alternate_email'} onChange={(e) => setEmail(e.target.value)} />
            {
                !isvalidEmail && <small style={{color:'red'}}>Invalid Email ! pleasw input valid Email</small>
            }
            
            
            <InputText name="password" value={password} required type={'password'} placeholder={'Enter password'} icon={'lock'} onChange={(e) => setPassword(e.target.value)} />

            <InputText name="confirmPassword" value={confirmPassword} required type="password" placeholder="Confirm password" icon="lock_clock" onChange={(e) => setConfirmPassword(e.target.value)} />

            <Checkbox name="agree" checked={agree} required text="I agree to the Terms &amp; Conditions" onChange={(e) => setAgree(e.target.value)} />
            
            {errors && (
                <>
                    <p className="error">{errors}</p>
                    <br />
                </>

            )}

            <Button disabled={loading}  type="submit">
               <span>Submit now</span>
            </Button>

            <div className="info">
            Already have an account? <Link to="/auth/login">Login</Link> instead.
            </div>
            {/* <Button>Submit now<Button/> */}
        </Form>
    );
}