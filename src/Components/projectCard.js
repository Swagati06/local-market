import React, { Component } from 'react'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, IconButton, Button, CardMenu } from 'react-mdl'

class ProjectCard extends Component {   

    render() {
        return (
            <React.Fragment>
            {/* // <div> */}
                <Card shadow={0} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz5DySW0m0ufsLuND8krdRKQsSwcuUz0fPEAboX5OlvEWa6NMI) center / cover'}}>Tic Tac Toe</CardTitle>
                        <CardText>
                            Using Basic concepts of JavaScript, a tic tac toe game has been designed by me.
                            It consist a 2 Player inter-changeable side of play.
                        </CardText>
                    <CardActions border style={{margin:'auto', textAlign:'center'}}>
                        <Button colored>Run</Button>
                        <Button colored>Git</Button>
                        <Button colored>Code</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
            {/* // </div> */}
            </React.Fragment>
        )
    }
}

export default ProjectCard