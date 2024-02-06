import React, { useState,useEffect } from "react";
import "./Login.css";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import {  setToken } from "../slices/token";
import {setProfile} from "../slices/profile"

export default function Login() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  // use selector pour importer les variables
  const token = useSelector((state) => state.token.token);
  // dispatch pour importer les methode du store
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const submitForm = async (e) => {
    e.preventDefault();
    try {
    const res = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: login, password: pass }),
    });
    const data = await res.json();
    dispatch(setToken(data.body.token))
  }
  catch (err){
    alert("Utilisateur ou mot de passe incorrect")
  }
  };
  useEffect(()=>{
    (async ()=>{
      if(token!=""){
        const res = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "post",
          headers: {
            "Content-type": "application/json",
            "Authorization":`Bearer ${token}`
          },
        });
        const data = await res.json();
       dispatch(setProfile(data.body))
       navigate('/user')
      }
    })()
  },[token,dispatch,navigate])
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button" onClick={submitForm}>
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
