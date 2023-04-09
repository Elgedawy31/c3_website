import React from "react";
import Header from "./Header";
import About from "../AboutUs/About";
import Separator1 from "../Separator1/Separator1";
import ChooseUs from "../ChooseUs/ChooseUs";
import "./Home.css";



const Home = ({cont , us}) => {
  return (
    <>
      <Header />
      <About/>
      <Separator1/>
      <ChooseUs/>
      <Separator1/>
    </>
  );
};

export default Home;
