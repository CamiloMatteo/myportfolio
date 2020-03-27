import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light'
                                alt="avatar" style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em', }}>Camilo Matteo</h2>
                        <h4 style={{ color: 'gray' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h4 style={{ color: 'gray' }}>Address</h4>
                        <p>Mi direccion actual</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h4 style={{ color: 'gray' }}>Phone</h4>
                        <p>+569 62501869</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h4 style={{ color: 'gray' }}>Email</h4>
                        <p>matteo.camilo.k@gmail.com</p>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName={'AIEP1'}
                            schoolDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                        />
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName={'AIEP2'}
                            schoolDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                        />
                        <hr style={{ borderTop: '3px solid #e22947', width: '80%', margin: "auto" }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={2017}
                            jobName={"Qality SA"}
                            jobDescription={"Practica Laboral + Contrato de trabajo como junior web dev"}
                        />
                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName={"Jumpitt SA"}
                            jobDescription={"Practica Laboral + Contrato de trabajo como junior web dev"}
                        />
                        <Experience
                            startYear={2018}
                            endYear={"Actual"}
                            jobName={"Autentia SA"}
                            jobDescription={"Practica Laboral + Contrato de trabajo como junior web dev"}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;