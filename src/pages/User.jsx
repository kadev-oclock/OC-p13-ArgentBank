/* eslint-disable no-console */
import React, { useState,useEffect } from "react";
import "./User.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../slices/profile";
import { useNavigate } from "react-router-dom";

export default function User() {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [edit, setEdit] = useState(false);
  // state = store
  // state.token = reducer token dans le store
  //state.token.token = token dans initial state du slice tokenSlice
  const token = useSelector((state) => state.token.token);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  useEffect(()=>{
    if(token==""){
      navigate('/login')
    }
  },[navigate,token])
  // console.log(profile)
  const handleEditClick = () => {
    setEdit(true);
  };

  const handleCancelClick = () => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
    setEdit(false);
  };

  const updateProfile = async () => {
  
    try {
      const res = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "put",
        headers: {
          "Content-type": "application/json",
          // Ajouter le jeton pour l'authentification
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });
      // console.log(res)

      if (res.ok) {
        
        dispatch(setProfile( { firstName, lastName }));
        setEdit(false);
      } else {
       console.error("Échec de la mise à jour du profil");
        // Gérer les cas d'erreur
      }
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du profil :",${error}`);
      // Gérer les erreurs réseau
    }
  };

  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {edit ? (
              <>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            ) : (
              <>
                {firstName} {lastName}
              </>
            )}
          </h1>
          {edit ? (
            <>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button className="save-button" onClick={updateProfile}>
                Save
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          )}
        </div>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
