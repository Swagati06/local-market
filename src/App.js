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
                <Link to="/sell">SELL</Link>
                
                <Link to="/signup">SIGN UP</Link>
                <Link to="/projects">CART</Link>
                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">VENDO</Link>}>
            <Navigation>
                <Link to="/resume">My Account</Link>
                <Link to="/about">Your Order</Link>
                <Link to="/about">Track Your Order</Link>
                <Link to="/contact">Manage</Link>
                <Link to="/resume">Help</Link>
                <Link to="/resume">Contact us</Link>
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
}

export default App;
