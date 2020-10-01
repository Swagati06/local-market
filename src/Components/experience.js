import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export class experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={2}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={2}>
                    <p style={{fontFamily:'Oxygen',fontSize:'20px', fontWeight:'bold', paddingRight:'1em'}}>{this.props.company}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px', fontSize:'20px', textDecoration:'underline'}}>
                        {this.props.post}
                    </h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default experience
