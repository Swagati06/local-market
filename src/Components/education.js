import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class education extends Component {
    render(props) {
        return (
            <Grid>
                <Cell col={2}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={2}>
                    <p style={{fontFamily:'Oxygen', fontWeight:'bold', paddingRight:'1em'}}>{this.props.qual}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px',}}>
                        {this.props.schoolName}
                    </h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
            
        )
    }
}

export default education
