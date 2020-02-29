import React, {useState} from 'react'
import {
    Button,
    Container,
    Grid,
    GridRow,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from "semantic-ui-react";
import {getWidth} from "./DesktopContainer";
import {Link, withRouter} from "react-router-dom";
import {ac_logout} from "../../../reducers/loggedInUserReducer";
import {connect} from "react-redux";

const MobileHomePageContainer = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <Responsive as={Sidebar.Pushable}
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
                        <Grid centered>
                            <GridRow>
                                <Image src={require('../../../resources/wolfInverted.png')} size={'mini'}/>
                            </GridRow>
                            <GridRow>
                                <Header size={'tiny'} content={'Minimalistic Blogs'} color={'blue'}/>
                            </GridRow>
                        </Grid>
                    </Grid>
                </Menu.Item>
                <Menu.Item as={Link} to={'/home'}> Home </Menu.Item>
                <Menu.Item as={Link} to={'/about'}> About </Menu.Item>
                <Menu.Item as={Link} to={'/blogs'}> Blogs </Menu.Item>
                <Menu.Item as={Link} to={'/users'}> Users </Menu.Item>
                {props.loggedInUser ?
                    <Menu.Item onClick={() => props.logout()}> Logout </Menu.Item> :
                    <Menu.Item as={Link} to={'/login'}> Login/Sign Up </Menu.Item>
                }

            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
                <Segment inverted textAlign='center' vertical>
                    <Container>
                        <Menu>
                            <Menu.Item position={'left'}> <Icon name={'sidebar'} onClick={() => setVisible(!visible)}/>
                            </Menu.Item>
                            <Menu.Item position={'right'}>
                                {props.loggedInUser ?
                                    <Icon name={'arrow left'} onClick={() => props.history.goBack()}/> :
                                    <Button.Group>
                                        <Button as={Link} to={'/login'} primary>Login</Button>
                                        <Button.Or/>
                                        <Button as={Link} to={'signup'} secondary>Sign Up</Button>
                                    </Button.Group>
                                }
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
                {props.children}
                <Segment inverted>
                    <Grid divided inverted stackable verticalAlign={'middle'} textAlign={'center'}>
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
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
    )

};

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.loggedInUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(ac_logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MobileHomePageContainer));