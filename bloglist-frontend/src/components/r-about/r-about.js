import React, {useEffect} from 'react'
import {Container, Grid, GridRow, Header, Label, Segment} from "semantic-ui-react";
import MyCard from "./MyCard";
import MyProjects from "./MyProjects";
import MasterContainer from "../components/containers/MasterContainer";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";
import {connect} from "react-redux";
import NofiticationDisplayer from "../components/NofiticationDisplayer";

const About = (props) => {

    useEffect(() => {
        props.incrementPageViews();
        window.scroll(0,0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[null]);

    return (
        <MasterContainer>
            <NofiticationDisplayer/>
            <Segment style={{minHeight:'83vh'}}>
                <Container>
                    <Grid stackable celled='internally'>
                        <Grid.Row width={8} style={{marginTop: '2em'}}>
                            <Header size={'huge'} content={'About Me'} color={'teal'}/>
                        </Grid.Row>
                        <Grid.Column width={6} style={{marginTop: '2em'}}>
                            <MyCard/>
                        </Grid.Column>
                        <Grid.Column width={10} style={{marginTop: '2em'}}>
                            <Header as={'h2'} content={'Other Projects'}/>
                            <MyProjects/>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Segment padded secondary>
                                <Label attached='top'>What else?</Label>
                                <Header as={'h2'} content={'ummm... What else would do you like to know?'}/>
                                <Header as={'h3'} content={'Try deciphering the line below to find the hidden message!'}/>
                                <Container text>
                                    <Grid centered>
                                        <GridRow>
                                            <Segment secondary compact raised textAlign={'center'}>
                                                <Header as={'h3'}
                                                        content={`'dolor sit amet, consectetur adipisicing elit Nam, odio.'`}
                                                        color={'teal'}/>
                                            </Segment>
                                        </GridRow>
                                    </Grid>
                                </Container>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </MasterContainer>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};
export default connect(null, mapDispatchToProps)(About);