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
                <Link to="/about">SELL</Link>
                <Link to="/projects">ABOUT US</Link>
                <Link to="/about">SIGN IN</Link>
                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">VENDO</Link>}>
            <Navigation>
                <Link to="/resume">PRODUCTS</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
                
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
