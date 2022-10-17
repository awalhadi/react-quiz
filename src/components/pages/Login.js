import Illustrator from "../Illustrator";
import LoginForm from "../LoginForm";

export default function Login(){
    return (
        <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustrator />
            <LoginForm />
        </div>
        </>
    );
}