import React from "react";
import MasterContainer from "../components/containers/MasterContainer";
import {Button, Container, Form, Grid, Header, Icon, Image, Message, Segment} from "semantic-ui-react";
import {connect} from 'react-redux'
import {ac_setNotification_Text} from "../../reducers/notificationTextReducer";
import {ac_login} from "../../reducers/loggedInUserReducer";
import useResource from "../../hooks/useResources";
import useFormHook from "../../hooks/formHook";
import {Link} from "react-router-dom";
import NotificationDisplayer from "../components/NofiticationDisplayer";


const RouteLogin = (props) => {

    const login = useResource('/api/login');
    const username = useFormHook('text');
    const password = useFormHook('password');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!inputValidator()) {
            return
        }

        const requestObject = {
            username: username.value,
            password: password.value
        };

        try{
            props.login(login, requestObject);
            username.clear();
            password.clear();
        }
        catch (exception) {
            props.setNotificationText('Error Logging in - Invalid Username or password');
        }
    };

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

    return(
        <MasterContainer>
            <Container>
                <Grid inverted>
                    <Grid.Row centered>
                        <Grid textAlign={'center'}  style={{ height: '100vh'}} verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' color='teal' textAlign='center'>
                                    <Icon name={'sign-in'} /> Log-in to your account
                                </Header>
                                <Form size='large' onSubmit={handleSubmit}>
                                    <Segment stacked>
                                        <Form.Input fluid value={username.value} icon='user' iconPosition='left' placeholder='username' onChange={username.update} />
                                        <Form.Input
                                            value = {password.value}
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={password.update}
                                        />
                                        <Button color='teal' fluid size='large'>
                                            Login
                                        </Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    <Link to={'/signup'}> New to us? Sign Up </Link>
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

const mapDispatchToProps = (dispatch)=> {
    return{
        setNotificationText:(data) => dispatch(ac_setNotification_Text(data)),
        login: (db, data) => dispatch(ac_login(db, data)),
    }
};

export default connect(null, mapDispatchToProps)(RouteLogin);
