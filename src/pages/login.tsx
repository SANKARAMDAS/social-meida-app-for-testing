import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const signInwithGoogle = async () => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate("/");
    };
  return (
      <div>
          <h1> Sign In With Google To Continue</h1>
          <button onClick={signInwithGoogle}>Sign In With Google</button>
      </div>
  )
}