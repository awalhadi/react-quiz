import Illustrator from "../Illustrator";
import SignupForm from "../SignupForm";

export default function Signup(){
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustrator showSignupImage ={true} />
                <SignupForm/>
            </div>
        </>
    );
}