import React from "react";
//import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import '../styles/Sell.css';
import { Link } from 'react-router-dom'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
<<<<<<< HEAD
  { width: 50, itemsToShow: 2 },
=======
  { width: 20, itemsToShow: 2 },
>>>>>>> 0195448799b496a14097ea3901f340afb3ac0bdc
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const cities=["NANDED","PUNE","MUMBAI","AURANGABAD","NASHIK","HYDERABAD","DELHI"]

function sell() {
  return (
    <>
<<<<<<< HEAD
      <h1 style={{  textAlign: "center"}}>FIND YOUR OWN CITY SHOPS!!</h1>
=======
      <h1 style={{ textAlign: "center" }}>FIND YOUR OWN CITY SHOPS!!</h1>
>>>>>>> 0195448799b496a14097ea3901f340afb3ac0bdc
      <div className="App">
      
        <Carousel breakPoints={breakPoints}>
          {/* <Item onClick={handleItem}>NANDED</Item>
          <Item>PUNE</Item>
          <Item>MUMBAI</Item>
          <Item>AURANGABAD</Item>
          <Item>NASHIK</Item>
          <Item>HYDRABAD</Item>
          <Item>DELHI</Item> */}
<<<<<<< HEAD
          {cities.map((item,index)=>(<Link to="/page1"><Item style={{width: '140%'}}>{item}</Item></Link>))}
=======
          {cities.map((item,index)=>(<Link to="/page1"><Item style={{width: '100%'}}>{item}</Item></Link>))}
>>>>>>> 0195448799b496a14097ea3901f340afb3ac0bdc
        
        </Carousel>
      </div>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Sell />, rootElement);
export default sell;