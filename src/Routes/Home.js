import React from "react";
import Information from "../Components/Information/Information";
import Showcase from "../Components/Showcase/Showcase";
import Welcome from "../Components/Welcome/Welcome";

function Home() {
  return (
    <>
      <Welcome />
      <Information />
      <Showcase />
    </>
  );
}

export default Home;