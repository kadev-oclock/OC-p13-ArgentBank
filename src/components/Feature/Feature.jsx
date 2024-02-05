import React from "react";
import chat from "/src/assets/image/icon-chat.png";
import money from "/src/assets/image/icon-money.png";
import security from "/src/assets/image/icon-security.png";
// import { useSelector, useDispatch } from "react-redux";
// import { add, supp,replace } from "../../slices/todos";
import "./Feature.css";

export default function Feature() {
  // const todos = useSelector((state) => state.todos.todos);
  // const dispatch = useDispatch();

  // const getTodo = async ()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await res.json()
  //   dispatch(add(data))
  // }
  // useEffect(()=>{
  //   (async ()=>{

  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     const data = await res.json()
  //     dispatch(replace(data))
  //   })()
  // },[])

  //validation form
  // valid = async ()=>{
  //   const res = await fetch("post user avec data")
  //   const data = await res.json()
  //   if(data.token){
  //   dispatch(setToken(data.token)) 
  //   const res2 = await fetch("get profile avec le token")
  //   const data2 = await res2.json()
  //   dispatch(setProfile(data2))
  //   Navigate('/profile')
  //   }
  // }
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={chat} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className="feature-item">
        <img src={money} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className="feature-item">
        <img src={security} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </section>
  );
}
