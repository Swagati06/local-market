import React from "react";
//import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import '../styles/Sell.css';
import { Link } from 'react-router-dom'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 20, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const cities=["NANDED","PUNE","MUMBAI","AURANGABAD","NASHIK","HYDERABAD","DELHI"]

function sell() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>FIND YOUR OWN CITY SHOPS!!</h1>
      <div className="App">
      
        <Carousel breakPoints={breakPoints}>
          {/* <Item onClick={handleItem}>NANDED</Item>
          <Item>PUNE</Item>
          <Item>MUMBAI</Item>
          <Item>AURANGABAD</Item>
          <Item>NASHIK</Item>
          <Item>HYDRABAD</Item>
          <Item>DELHI</Item> */}
          {cities.map((item,index)=>(<Link to="/page1"><Item style={{width: '100%'}}>{item}</Item></Link>))}
        
        </Carousel>
      </div>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Sell />, rootElement);
export default sell;