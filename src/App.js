import React from 'react';
import './App.css';
import { Header, Navigation, Layout, Drawer, Content } from 'react-mdl'
import Main from './Components/router/main'
import { Link } from 'react-router-dom'


function App() {
    return (
        <div className="demo-big-content">

            <Layout>
                <Header className='header-color' title={<Link style={{fontFamily: "Noto Serif", textDecoration: 'none', color: 'white' }} to="/"><b>VENDO</b></Link>} scroll>

                    <Navigation>
                        <div>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control" type="search" placeholder="Search Here" aria-label="Search" />
                                <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <Link to="/resume">SHOP</Link>
                        <Link to="/Sell">SELL</Link>

                        <Link to="/signup">SIGN UP</Link>
                        <Link to="/projects">CART</Link>

                    </Navigation>
                </Header>
                <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">VENDO</Link>}>
                    <Navigation>
                        <Link to="/resume">My Account</Link>
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

}

export default App;
