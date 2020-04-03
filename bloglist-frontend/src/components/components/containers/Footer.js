import React from 'react'
import {Container, Grid, Header, Icon, List, Segment} from "semantic-ui-react";

const Footer = () => {

    return (
        <Segment vertical>
            <Container>
                <Grid divided stackable verticalAlign={'middle'} textAlign={'center'}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header inverted as={'h3'} content={'Links'}/>
                            <List>
                                <List.Item><a href={'https://github.com/monykaushik17'} target={'_blank'}
                                              rel="noopener noreferrer">GitHub</a></List.Item>
                                <List.Item><a href={'https://www.linkedin.com/in/mony-kaushik-62b96118b/'}
                                              target={'_blank'} rel="noopener noreferrer">LinkedIn</a></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as={'h3'}>
                                <Icon name={'copyright outline'} size={'small'}/>
                                <Header.Content>This webpage is coded by Mony Kaushik </Header.Content>
                                <Header.Subheader>Minimalistic Apps by Mony Kaushik</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
};

export default Footer;