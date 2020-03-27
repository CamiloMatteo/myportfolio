import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
import logoHtml from '../img/html-css-logo.png';

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
                    <div className="projects-grid">
                        {/** Project 1 */}
                        <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(' + logoHtml + ') center / cover' }}>HTML / CSS</CardTitle>
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

                        {/** Project 2 */}
                        <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(' + logoHtml + ') center / cover' }}>HTML / CSS</CardTitle>
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

                        {/** Project 3 */}
                        <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(' + logoHtml + ') center / cover' }}>HTML / CSS</CardTitle>
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
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;