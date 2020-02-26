import React, {useState} from 'react'
import {
    Responsive,
    Sidebar,
    Menu,
    Segment,
    Header,
    Button,
    Container,
    Icon,
    Statistic, Grid, Image, List, GridRow,
} from "semantic-ui-react";
import {getWidth} from "./DesktopContainer";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

const MobileContainer = (props) => {
    const [visible, setVisible] = useState(false);

    return(
        <Responsive  as={Sidebar.Pushable}
                     getWidth={getWidth}
                     maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as={Link} to={'/'}>
                    <Grid centered>
                        <GridRow>
                            <Image rounded src={require('../../../resources/wolfInverted.png')} size={'mini'}/>
                        </GridRow>
                    </Grid>
                </Menu.Item>
                <Menu.Item as={Link} to={'/home'}> Home </Menu.Item>
                <Menu.Item as={Link} to={'/about'}> About </Menu.Item>
                <Menu.Item as={Link} to={'/blogs'}> Blogs </Menu.Item>
                <Menu.Item as={Link} to={'/users'}> Users </Menu.Item>
                {props.loggedInUser ?
                    <Menu.Item as={Link} onClick={() => props.logout()}> Logout </Menu.Item>:
                    <Menu.Item as={Link} to={'/login'}> Login/Sign Up </Menu.Item>
                }
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
                <Segment inverted textAlign={'center'} vertical>
                    <Menu inverted>
                        <Menu.Item position={'left'}> <Icon name={'sidebar'} onClick={() => setVisible(!visible)}/> </Menu.Item>
                        <Menu.Item position={'right'}>
                            <Icon name={'arrow left'} onClick={()=> props.history.goBack()}/>
                        </Menu.Item>
                    </Menu>
                </Segment>
                {props.children}
                <Segment inverted>
                    <Grid divided inverted stackable verticalAlign={'middle'} textAlign={'center'}>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Header inverted as={'h3'} content={'Links'}/>
                                <List>
                                    <List.Item><a href={'https://github.com/monykaushik17'} target={'_blank'}>GitHub</a></List.Item>
                                    <List.Item><a href={'https://www.linkedin.com/in/mony-kaushik-62b96118b/'} target={'_blank'}>LinkedIn</a></List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column >
                                <Header inverted as={'h3'}>
                                    <Icon name={'copyright outline'} small />
                                    <Header.Content>This webpage is coded by Mony Kaushik </Header.Content>
                                    <Header.Subheader>Minimalistic Apps by Mony Kaushik</Header.Subheader>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
    )

};

export default withRouter(MobileContainer);