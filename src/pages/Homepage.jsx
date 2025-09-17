import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ImageCircle from "../components/ImageCircle";
import Clone from "../components/Clone";
import HorizontalCard from "../components/HorizontalCard";

const Homepage = () => {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <ImageCircle />
      <HorizontalCard />
    </>
  );
};

export default Homepage;
