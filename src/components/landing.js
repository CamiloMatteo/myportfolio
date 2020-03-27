import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light'
                            alt="avatar" className="avatar-img" />

                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | Bulma | JavaScript | React | Ruby | Rails | Postgres | MongoDB </p>
                            <div className="social-links">
                                {/* FaceBook */}
                                <a href="https://www.facebook.com/cmatteop" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/CamiloMatteo" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Linkedin */}
                                <a href="https://github.com/CamiloMatteo" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Landing;