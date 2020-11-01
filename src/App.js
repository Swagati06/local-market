import React from 'react';
import './App.css';
import {Header, Navigation,Layout, Drawer, Content } from 'react-mdl'
import Main from './Components/main'
import {Link} from 'react-router-dom'


function App() {
  return (
    <div className="demo-big-content">
    

    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration:'none', color:'white'}} to="/">VENDO</Link>} scroll>
            
        <Navigation>
                <Link to="/resume">SHOP</Link>
                <Link to="/Sell">SELL</Link>
                
                <Link to="/signup">SIGN UP</Link>
                <Link to="/projects">CART</Link>
                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">VENDO</Link>}>
            <Navigation>
                <Link to="/Account">My Account</Link>
                <Link to="/about">Your Order</Link>
                <Link to="/about">Track Your Order</Link>
                <Link to="/about">Manage</Link>
                <Link to="/resume">Help</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/resume">Log Out</Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
    </div>
  );

function App() {

  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration:'none', color:'white'}} to="/"><b>VENDO</b></Link>} scroll>
            
        <Navigation>
                <Link to="/resume"><b>SHOP</b></Link>
                <Link to="/Sell"><b>SELL</b></Link>
                <Link to="/projects"><b>CATEGORIES</b></Link>
                <Link to="/signup"><b>SIGN UP</b></Link>
                <Link to="/cart"><b>CART</b></Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">VENDO</Link>}>
            <Navigation>
                <Link to="/Account">My account</Link>
                <Link to="/contact">Your Order</Link>
                <Link to="/resume">Track Your Order</Link>
                <Link to="/about">Manage</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/about">Help</Link>
                <Link to="/resume">Log Out</Link>
               
                {/* <Link to="/contact"></Link> */}
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
    </div>
  );

   
  }

}

export default App;
