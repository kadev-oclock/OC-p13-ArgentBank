import React from "react";
import "./home.css";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Banner />
        <Feature />
      </main>
      <Footer/>
    </>
  );
}
