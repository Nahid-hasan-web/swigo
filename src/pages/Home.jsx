import React from "react";
import Banner from "../components/Banner";
import Special_Menu from "../components/Special_Menu";
import Todays_menu from "../components/Todays_menu";
import Quality from "../components/Quality";
import Ourmenu from "../components/Ourmenu";
import Reservation from "../components/Reservation";
import ChefCard from "../components/ChefCard";

const Home = () => {
  return (
    <>
      <Banner />
      <Special_Menu />
      <Todays_menu />
      <Quality />
      <Ourmenu />
      <Reservation />
      <ChefCard />
    </>
  );
};

export default Home;
