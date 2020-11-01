import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import '../styles/Sell.css'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Sell() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>FIND YOUR OWN CITY SHOPS!!</h1>
      <div className="App px-5">

        <Carousel breakPoints={breakPoints}>
          <Item>NANDED</Item>
          <Item>PUNE</Item>
          <Item>MUMBAI</Item>
          <Item>AURANGABAD</Item>
          <Item>NASHIK</Item>
          <Item>HYDRABAD</Item>
          <Item>DELHI</Item>

        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Sell />, rootElement);
export default Sell;