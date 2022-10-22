import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import InputText from "./InputText";

export default function LoginForm(){

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if (email?.length > 0 || password?.length > 0) {
            setErrors('');
        }
    }, [email, password])

    // 
    async function loginHandler(e){
        e.preventDefault();
        setLoading(true);
        if (!password || !email) {
            setErrors('Email or Password required');
            setLoading(false);
            setErrors("");
            
            return;
        }

        await login(email, password)
        .then((res) => {
            setLoading(false);
            setErrors("");
            if (res) {
                navigate("/")
            }else{
                setErrors("Credentials doesn't match");
            }
        })
        
    }

    // function inputChangeHandler(e){
    //     const {name, value} = e.target;
    //     let data = form;
    //     data[name] = value;
    //     setForm(data);
    // }


    return (
        <Form style={{ height:"330px" }}  onSubmit={loginHandler} >
            <InputText name="email" value={email} required type='text' placeholder="Enter email" icon="alternate_email" onChange={(e) => setEmail(e.target.value)} />


            <InputText name="password" value={password} required type='password' placeholder="Enter password" icon="lock" onChange={(e) => setPassword(e.target.value)} />
            
            {errors && (
                <>
                    <p className="error">{errors}</p>
                    <br />
                </>

            )}
        

            <Button disabled={loading}  type="submit">
                <span>Login</span>
            </Button>

            <div className="info">Don't have an account? <Link to="/auth/signup">Signup</Link> instead.</div>
                
        </Form>
    );
}