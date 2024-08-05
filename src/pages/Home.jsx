// pages/Home.js
import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { UserProvider } from "../context/userContext";

const Home = () => {
  return (
    <UserProvider>
      <div>
        <Intro />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </UserProvider>
  );
};

export default Home;
