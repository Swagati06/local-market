import React from 'react';
import './App.css';
import { Header, Navigation, Layout, Drawer, Content } from 'react-mdl'
import Main from './Components/main'
import { Link } from 'react-router-dom'



function App() {

  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration:'none', color:'white'}} to="/"><b>VENDO</b></Link>} scroll>
            
        <Navigation>
                <Link to="/resume"><b>SHOP</b></Link>
                <Link to="/about"><b>SELL</b></Link>
                <Link to="/projects"><b>CATEGORIES</b></Link>
                <Link to="/signup"><b>SIGN UP</b></Link>
                <Link to="/cart"><b>CART</b></Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">VENDO</Link>}>
            <Navigation>
                <Link to="/contact">My account</Link>
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

export default App;
