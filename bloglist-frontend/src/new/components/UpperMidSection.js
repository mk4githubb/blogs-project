import {Container, Divider, Grid, Header, Icon, Input, Segment} from "semantic-ui-react";
import React from "react";


const UpperMidSection = ({mobile}) => {

    return(
        <Segment inverted textAlign={'center'} >
            <Header as={'h1'} style={{fontSize:mobile?'1.5em':'3em', marginTop:mobile?'1.5em':'2em'}} >Minimalistic Blogs <span style={{fontSize:'0.6em'}}>by Back_slash</span></Header>
            <Header as={'h2'} style={{fontSize:mobile?'1.5em':'2em', marginTop:mobile?'0.7em':'1.5em'}} content={'My first blogging website'}/>
            <Divider horizontal section/>
            <Grid textAlign={'center'} verticalAlign={'middle'} container centered style={{border:'2px solid green'}}>
                <Grid.Row  columns={1} stretched style={{border:'2px solid red'}}>
                    <Input icon placeholder='Search...'>
                        <input />
                        <Icon name='search' />
                    </Input>
                </Grid.Row>
            </Grid>
        </Segment>
    )
};

export default UpperMidSection;