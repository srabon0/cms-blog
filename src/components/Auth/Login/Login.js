import React ,{useState}from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../redux/actionsCreator/actionCreator';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [userEmail,setUserEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    const loginUser = (e)=>{
        e.preventDefault()
        if(!userEmail || !password){
            return
        }
        console.log("email",userEmail);
        console.log("password",password);
        const url  = `https://cms-blog-srabon.onrender.com/login`
        const userData = {
            username:userEmail,
            password:password
        }
        axios.post(url,userData)
        .then(data=>{
          console.log("setting current user data");
          console.log(data.data.data);
          if(data.data.data){
            dispatch(setCurrentUser(data.data.data))
            navigate('/');
          }
        })
        .catch(error=>console.log(error))

    }
  return (
    <div className="mx-auto p-3 rounded container w-25 bg-light mt-5">
      <form onSubmit={loginUser}>
        <h1>Login User</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            onKeyUp={(e)=>setUserEmail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            onKeyUp={(e)=>setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;