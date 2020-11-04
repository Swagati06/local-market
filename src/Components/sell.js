import React from "react";
//import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import '../styles/Sell.css';
import { Link } from 'react-router-dom'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 50, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const cities = ["NANDED", "PUNE", "MUMBAI", "AURANGABAD", "NASHIK", "HYDERABAD", "DELHI"]

function sell() {
  return (
    <>
<<<<<<< HEAD

      <h1 style={{  textAlign: "center"}}>FIND YOUR OWN CITY SHOPS!!</h1>
=======
      <h1 style={{ textAlign: "center" }}>FIND YOUR OWN CITY SHOPS!!</h1>
>>>>>>> 3ab9725da873e01c672080769f59040f1dff71f3
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
          {cities.map((item, index) => (<Link to="/page1"><Item style={{ width: '140%' }}>{item}</Item></Link>))}

>>>>>>> 3ab9725da873e01c672080769f59040f1dff71f3
        </Carousel>
      </div>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Sell />, rootElement);
export default sell;