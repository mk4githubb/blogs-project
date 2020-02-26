import React from 'react'
import {Container, Grid, Header, Label, Segment} from "semantic-ui-react";
import MyCard from "./MyCard";
import MyProjects from "./MyProjects";
import WhatElseToWrite from "./WhatElseToWrite";
import MasterContainer from "../components/containers/MasterContainer";

const About = () => {

    return(
        <MasterContainer>
            <Container>
                <Grid stackable celled='internally'>
                    <Grid.Row width={8} style={{marginTop:'2em'}} >
                        <Header size={'huge'} content={'About Me'} color={'teal'} />
                    </Grid.Row>
                    <Grid.Column width={6} style={{marginTop:'2em'}}>
                    <MyCard/>
                    </Grid.Column>
                    <Grid.Column width={10} style={{marginTop:'2em'}}>
                        <Header as={'h2'} content={'Other Projects'}/>
                        <MyProjects/>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Segment padded>
                            <Label attached='top'>What else?</Label>
                            <Header as={'h2'} content={'ummm... What else would do you like to know?'}/>
                            <WhatElseToWrite/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        </MasterContainer>

    )
};

export default About;