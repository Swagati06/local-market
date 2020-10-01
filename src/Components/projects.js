import React, { Component } from 'react'
import ProjectCard from './projectCard'
import {Tabs, Tab, Grid, Cell   } from 'react-mdl'

class projects extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             activeTab:0
        }
    }

    // toggleCategories=()=>{
    //     if (this.state.activeTab===0){
    //         return (<projectCard />)}
    //     else if (this.state.activeTab===1){
    //         return(<div><h1>This is React</h1></div>)}
    //     else if (this.state.activeTab===2){
    //         return(<div><h1>This is Machine Learning</h1></div>)
    //     }
            
    // }
    

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>Machine Learning</Tab>
                </Tabs>
                
                <section>
                
                    <Grid>
                        
                        <Cell col={12}>
                        <div className="projects-grid">    
                                <ProjectCard />
                                <ProjectCard />
                                <ProjectCard />
                                </div>          
                        </Cell>
                </Grid>
                
                </section>
                
            </div>
        )
    }
}

export default projects
