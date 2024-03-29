import React, {useEffect} from "react";
import MasterContainer from "../components/containers/MasterContainer";
import {Button, Container, Form, Grid, Header, Icon, Message, Segment} from "semantic-ui-react";
import {connect} from 'react-redux'
import {ac_setNotification_Text} from "../../reducers/notificationTextReducer";
import {ac_login} from "../../reducers/loggedInUserReducer";
import useFormHook from "../../hooks/formHook";
import {Link} from "react-router-dom";
import NotificationDisplayer from "../components/NofiticationDisplayer";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";


const RouteLogin = (props) => {

    const username = useFormHook('text');
    const password = useFormHook('password');

    useEffect(() => {
        props.incrementPageViews();
        window.scroll(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [null]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!inputValidator()) {
            return
        }

        const requestObject = {
            username: username.value,
            password: password.value
        };

        try {
            props.login(requestObject);
            username.clear();
            password.clear();
        } catch (exception) {
            props.setNotificationText('Error Logging in - Invalid Username or password', false);
        }
    };

    const inputValidator = () => {
        if (!username || username.value.length === 0 || !password || password.value.length === 0) {
            props.setNotificationText('Title or body cannot be empty', false);
            return false;
        } else if (username.value.length < 3 || password.value.length < 3) {
            props.setNotificationText("Length of username or password can't be less than 3", false);
            return false;
        }
        return true
    };

    return (
        <MasterContainer>
            <Container style={{minHeight: '83vh'}}>
                <Grid inverted>
                    <Grid.Row centered>
                        <Grid textAlign={'center'} style={{height: '90vh'}} verticalAlign='middle'>
                            <Grid.Column style={{maxWidth: 450}}>
                                <Header as='h2' color='teal' textAlign='center'>
                                    <Icon name={'sign-in'}/> Log-in to your account
                                </Header>
                                <Form size='large' onSubmit={handleSubmit}>
                                    <Segment stacked>
                                        <Form.Input fluid value={username.value} icon='user' iconPosition='left'
                                                    placeholder='username' onChange={username.update}/>
                                        <Form.Input
                                            value={password.value}
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={password.update}
                                            autoComplete="on"
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

const mapDispatchToProps = (dispatch) => {
    return {
        setNotificationText: (data, positive) => dispatch(ac_setNotification_Text(data, positive)),
        login: (data) => dispatch(ac_login(data)),
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default connect(null, mapDispatchToProps)(RouteLogin);
