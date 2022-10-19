import { Link } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import InputText from "./InputText";

export default function LoginForm(){
    return (
        <Form style={{ height:"330px" }}>
            <InputText type='text' placeholder="Enter email" icon="alternate_email" />

            <InputText type='password' placeholder="Enter password" icon="lock" />

            <Button>
                <span>Login</span>
            </Button>

            <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                
        </Form>
    );
}