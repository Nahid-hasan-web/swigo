import React from "react";
import Banner from "../components/Banner";
import Special_Menu from "../components/Special_Menu";
import Todays_menu from "../components/Todays_menu";

const Home = () => {
  return (
    <>
      <Banner />
      <Special_Menu />
      <Todays_menu />
    </>
  );
};

export default Home;
