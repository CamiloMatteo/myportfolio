import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {
    // Constructor
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        switch (this.state.activeTab) {
            case 1:
                return (
                    <div><h1>Bootstrap</h1></div>
                )
            case 2:
                return (
                    <div><h1>Javascript</h1></div>
                )
            case 3:
                return (
                    <div><h1>React</h1></div>
                )
            default:
                return (
                    <div>
                        <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i7.pngguru.com/preview/235/1019/730/web-development-responsive-web-design-cascading-style-sheets-html-web-design.jpg) center / cover' }}>HTML / CSS</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                                </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid2">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;