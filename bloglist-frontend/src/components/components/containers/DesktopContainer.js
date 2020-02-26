import React,{useState} from 'react'
import {
    Button,
    Container, Dropdown,
    Grid,
    GridColumn,
    GridRow,
    Header, Icon, Image, List,
    Menu,
    Responsive,
    Segment,
    Statistic,
    Visibility
} from "semantic-ui-react";

import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ac_logout} from "../../../reducers/loggedInUserReducer";

export const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

const DesktopContainer = (props) => {
    const [menuFixed, setMenuFixed] = useState(false);

    const ButtonDisplayLogic = () => {
        if(props.loggedInUser){
            return (
                <Dropdown text={`Hello  ${props.loggedInUser.username}`} floating labeled button className='icon' >
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.logout()}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            )
        }

        return(
            <Button.Group>
                <Button as={Link} to={'/login'}>Login</Button>
                <Button.Or/>
                <Button as={Link} to={'/signup'}>Sign Up</Button>
            </Button.Group>
        )
    };

    return (
        <Responsive getWidth={getWidth}  minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={false} onBottomPassed={() => setMenuFixed(true)} onBottomPassedReverse={()=>setMenuFixed(false)}>
                <Menu fixed={menuFixed?'top':null}>
                    <Menu.Item as={Link} to={'/'}><Image rounded src={require('../../../resources/wolf.png')} size={'mini'}/></Menu.Item>
                    <Menu.Item as={Link} to={'/home'}>Home</Menu.Item>
                    <Menu.Item as={Link} to={'/about'}>About</Menu.Item>
                    <Menu.Item as={Link} to={'/blogs'}>Blogs</Menu.Item>
                    <Menu.Item as={Link} to={'/users'}>Users</Menu.Item>
                    <Menu.Item position={'right'}>
                        {ButtonDisplayLogic()}
                    </Menu.Item>
                </Menu>
            </Visibility>
            {props.children}
            <Segment inverted vertical style={{height:'150px'}} textAlign={'left'}>
                <Container>
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
                </Container>
            </Segment>
        </Responsive>
    )
};

const mapStateToProps = (state)=>{
    return{
        loggedInUser:state.loggedInUser,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        logout:() => dispatch(ac_logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopContainer);