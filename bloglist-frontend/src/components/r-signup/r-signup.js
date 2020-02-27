import React, {useEffect} from "react";
import MasterContainer from "../components/containers/MasterContainer";
import {Button, Container, Form, Grid, Header, Icon, Message, Segment} from "semantic-ui-react";
import {ac_setNotification_Text} from "../../reducers/notificationTextReducer";
import {ac_createUser} from "../../reducers/loggedInUserReducer";
import {connect} from "react-redux";
import useFormHook from "../../hooks/formHook";
import useResource from "../../hooks/useResources";
import {Link, withRouter} from "react-router-dom";
import NotificationDisplayer from "../components/NofiticationDisplayer";
import {compose} from "redux";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";


const RouteSignup = (props) => {

    const username = useFormHook('text');
    const password = useFormHook('password');
    const usersDB = useResource('https://api-mk.herokuapp.com/api/users');

    useEffect(() => {
        props.incrementPageViews()
    });

    const inputValidator = () => {
        if (!username || username.value.length === 0 || !password || password.value.length === 0) {
            props.setNotificationText('Title or body cannot be empty');
            return false;
        } else if (username.value.length < 3 || password.value.length < 3) {
            props.setNotificationText("Length of username or password can't be less than 3");
            return false;
        }
        return true
    };

    const createUserHandler = async (event) => {
        event.preventDefault();

        if (!inputValidator()) {
            return
        }

        const newUser = {
            username: username.value,
            password: password.value
        };

        try {
            props.createUser(usersDB, newUser);
            props.setNotificationText(`User ${username.value} Created, Please Login. Redirecting you to login page.`);
            username.clear();
            password.clear();
            setTimeout(() => props.history.push('/login'), 2000);
        } catch (exception) {
            props.setNotificationText('Error, Creating user. Please try again.')
        }
    };

    return (
        <MasterContainer>
            <Container>
                <Grid>
                    <Grid.Row centered>
                        <Grid textAlign={'center'} style={{height: '80vh'}} verticalAlign='middle'>
                            <Grid.Column style={{maxWidth: 450, minWidth: 300}}>
                                <Header as={'h2'} color='teal' textAlign={'center'}>
                                    <Icon name={'signup'}/> Sign Up
                                </Header>
                                <Form size='large' onSubmit={createUserHandler}>
                                    <Segment stacked>
                                        <Form.Input fluid value={username} icon='user' iconPosition='left' placeholder='username'
                                                    onChange={username.update}/>
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={password.update}
                                            value={password}
                                        />
                                        <Button color='teal' fluid size='large'>
                                            Sign up
                                        </Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    <Link to={'/login'}>Already a user? Log in </Link>
                                </Message>
                                <NotificationDisplayer/>
                            </Grid.Column>
                        </Grid>
                    </Grid.Row>
                </Grid>
            </Container>
        </MasterContainer>
    )
};

const mapStateToProps = (state) => {
    return {
        notificationText: state.notificationText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNotificationText: (data) => dispatch(ac_setNotification_Text(data)),
        createUser: (db, newUser) => dispatch(ac_createUser(db, newUser)),
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RouteSignup);