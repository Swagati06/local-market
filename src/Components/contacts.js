import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class contacts extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2><b><u>VENDO CORPS.</u></b></h2>
                        <h2>Swagati Bharde</h2>
                        <h2>Sakshi Chidrawar</h2>
                        <h2>Vaibhavi Dalal</h2>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Us</h2>
                        <hr style={{borderTop:'5px dotted black', width:'50%', margin:'auto'}}/>
                            <div className="contact-list">
                            
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true" /> +91-7888287635</ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                            <i className="fa fa-envelope" aria-hidden="true" /> vaibhavidalal25@gmail.com</ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                            <i className="fa fa-envelope" aria-hidden="true" /> swagatibharde410@gmail.com</ListItemContent>
                                    </ListItem>
                                    
                                </List>
                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default contacts

