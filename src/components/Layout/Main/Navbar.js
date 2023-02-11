import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut, searchBlog } from "../../../redux/actionsCreator/actionCreator";

const Navbar = () => {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state)
  const cuser =  state.users.currentUser
  console.log("user is",cuser)

  const logout = async()=>{
    const res = await axios.get("http://localhost:5000/die");
    console.log(res);
    if(res){
      dispatch(logOut());
      // window.location.replace(data.url);
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand text-bold" to="/">
            Dev.so
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  Reading History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
             {
              cuser.role==='admin' &&  <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
             }
              {
               cuser ?  <li> <p>{cuser?.email}</p> </li> : <>
                <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li> 
                </>
              }
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onKeyUp={(e)=>dispatch(searchBlog(e.target.value))}
              />
              
              {
                cuser && <button onClick={()=>logout()}  className="btn btn-primary" > Logout </button>
              }
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
