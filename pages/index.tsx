import React from "react";
import { PlayArea } from "../components";
import { TestData } from "../assets/decks/Test";

const Homepage = () => {
  return (
    <div>
      <PlayArea decklist={TestData.decklist} />
    </div>
  );
};

export default Homepage;
