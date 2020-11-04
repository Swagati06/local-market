import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
import Card from './Card.js'
import Footer from './Footer.js';

const card_contents = [
  { title: 'Clothing', url: "https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: 'Grocery', url: "https://media.istockphoto.com/photos/supermarket-aisle-with-empty-shopping-cart-business-concept-picture-id962388052" },
  { title: 'Cosmetics', url: "https://s3-us-west-2.amazonaws.com/commercehq-userfiles-master/commercehq-store-eeaca839583a42e15da19b7fc901a309_da39a3ee5e6b4b0d3255bfef95601890afd80709/fb9eb0a57c0841eeaf66371aab2caf09_make_up_HD1.jpg" },
  { title: 'Hardware', url: "https://media.istockphoto.com/photos/home-appliance-in-the-store-picture-id515443264?k=6&m=515443264&s=612x612&w=0&h=QgzJ5Wq44l5_A-4J1pRm6HJ-3R6Y4d0SxQuNfBdiw4Y=" },
]

class landingPage extends Component {


  render() {
    return (
      <div>
        <div style={{ backgroundImage: 'url(https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?cs=srgb&dl=pexels-min-an-1087727.jpg&fm=jpg)', height: 550, backgroundSize: 'cover', }}>

          <div className="font-txt">
            <h1 style={{ fontSize: 70, fontFamily:"Noto Serif", textAlign: 'center', color: 'white', paddingTop: 140 }}><i>IT'S AN "ADD TO CART" KINDA DAY !!!</i></h1>
          </div>

          <div style={{ fontFamily:"Noto Serif",fontSize: 20, textAlign: 'center', color: 'white', paddingTop: 50 }}>
            <b>The world is shifting online – the web is now the most popular destination for all needs especially shopping.<br />
        So it’s not just enough to dress up your store windows, but it’s equally important to have an attractive online<br />
        store as a web and mobile application. And what better resource than content to decorate your online store!
        </b></div>

          <div className='d-flex justify-content-center w-100 my-5'>
            <form className="form-inline">
              <input className="form-control text-center w-50 pl-2" type="search" placeholder="Search City" aria-label="Search" style={{  height: 45, borderRadius: 10 }} />
              <button className="btn btn-info text-center my-sm-0 px-5" style={{ height: 45, borderRadius: 10 }} type="submit">Search</button>
            </form>
          </div>

        </div>

        <div>
          <Grid>
            {card_contents.map((item, index) => (
              <Cell col={3}>
                <Link to={`/${item.title}`}>
                  <Card title={item.title} image={item.url} />
                </Link>
              </Cell>
            ))}
          </Grid>
        </div>
        <Footer />
      </div>
    );

  }
}

export default landingPage;