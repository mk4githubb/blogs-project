import React, {useState} from 'react'
import {
    Grid,
    GridRow,
    Header,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from "semantic-ui-react";
import {getWidth} from "./DesktopContainer";
import {Link, withRouter} from "react-router-dom";
import Footer from "./Footer";
import {ac_logout} from "../../../reducers/loggedInUserReducer";
import {connect} from "react-redux";

const MobileContainer = (props) => {
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
                <Menu.Item as={Link} to={'/home'}>
                    <Grid centered>
                        <GridRow>
                            <Image src={require('../../../resources/wolfInverted.png')} size={'tiny'}/>
                        </GridRow>
                        <GridRow>
                            <Header size={'tiny'} content={'Minimalistic Blogs'} color={'blue'}/>
                        </GridRow>
                    </Grid>
                </Menu.Item>
                <Menu.Item as={Link} to={'/about'}> About </Menu.Item>
                <Menu.Item as={Link} to={'/blogs'}> Blogs </Menu.Item>
                <Menu.Item as={Link} to={'/users'}> Users </Menu.Item>
                {props.loggedInUser ?
                    <Menu.Item onClick={() => props.logout()}> Logout </Menu.Item> :
                    <Menu.Item as={Link} to={'/login'}> Login/Sign Up </Menu.Item>
                }
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
                <Segment inverted textAlign={'center'} vertical>
                    <Menu inverted>
                        <Menu.Item position={'left'}> <Icon name={'sidebar'} onClick={() => setVisible(!visible)}/>
                        </Menu.Item>
                        <Menu.Item position={'right'}>
                            <Icon name={'arrow left'} onClick={() => props.history.goBack()}/>
                        </Menu.Item>
                    </Menu>
                </Segment>
                {props.children}
                <Footer/>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MobileContainer));