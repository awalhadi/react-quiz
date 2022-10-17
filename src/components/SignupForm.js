import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import InputText from "./InputText";


export default function SignupForm(){
    return(
        <Form style={{ height: "500px" }} >
            <InputText type={'text'} placeholder={'Enter name'} icon={'person'} />

            <InputText type={'text'} placeholder={'Enter email'} icon={'alternate_email'} />
            
            <InputText type={'password'} placeholder={'Enter password'} icon={'lock'} />

            <InputText type="password" placeholder="Confirm password" icon="lock_clock" />

            <Checkbox text="I agree to the Terms &amp; Conditions" />

            <Button>
                Submit now
            </Button>

            <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
            </div>
            {/* <Button>Submit now<Button/> */}
        </Form>
    );
}