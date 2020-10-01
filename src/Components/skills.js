import React, { Component } from 'react'
import { Grid, Cell,ProgressBar } from 'react-mdl'

class skills extends Component {
    render(props) {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display:'flex'}}>
                        {this.props.skill}
                    </div>
                    <div style={{paddingLeft:'5em'}}>
                    <ProgressBar style={{margin:"auto", width:"75%"}} progress={this.props.perfection} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default skills
