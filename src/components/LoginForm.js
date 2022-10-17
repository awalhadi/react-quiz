import Button from "./Button";
import Form from "./Form";
import InputText from "./InputText";

export default function LoginForm(){
    return (
        <Form style={{ height:"330px" }}>
            <InputText type='text' placeholder="Enter email" icon="alternate_email" />

            <InputText type='password' placeholder="Enter password" icon="lock" />

            <Button>
                Login
            </Button>

            <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                
        </Form>
    );
}