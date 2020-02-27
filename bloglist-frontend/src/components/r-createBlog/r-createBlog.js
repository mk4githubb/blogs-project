import React, {useEffect, useState} from "react";
import MasterContainer from "../components/containers/MasterContainer";
import {Container, Form, Segment} from "semantic-ui-react";
import {ac_setNotification_Text} from "../../reducers/notificationTextReducer";
import NotificationDisplayer from "../components/NofiticationDisplayer";
import {connect} from "react-redux";
import {ac_createBlog} from "../../reducers/blogsReducer";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";


const RouteCreateBlog = (props) => {
    const [titleText, setTitleText] = useState('');
    const [aboutText, setAboutText] = useState('');

    useEffect(() => {
        props.incrementPageViews()
    });

    const blogCreateHandler = (event) => {
        event.preventDefault();

        if (!props.loggedInUser) {
            props.setNotificationText("Please Login in to create a blog");
        } else if (titleText.length < 1) {
            props.setNotificationText("Title can't be left blank");
            return
        } else if (aboutText.length < 1) {
            props.setNotificationText("Body can't be left blank");
            return;
        }

        const config = {
            headers: {
                Authorization: `bearer ${props.loggedInUser.webToken}`
            }
        };

        const newBlog = {
            title: titleText,
            text: aboutText
        };

        try {
            props.createBlog(config, newBlog, props.history);
            setAboutText('');
            setTitleText('');
        } catch (exception) {
            props.setNotificationText('Error saving blog');
        }
    };

    return (
        <MasterContainer>
            <Container style={{height: '80vh', marginTop: '2em'}}>
                <Segment>
                    <Form widths={'equal'} onSubmit={blogCreateHandler}>
                        <Form.Input fluid label='Title' placeholder='Title of the blog..'
                                    onChange={(event) => setTitleText(event.target.value)}/>
                        <Form.TextArea label='About' placeholder='Tell us more...' rows={10}
                                       onChange={(event) => setAboutText(event.target.value)}/>
                        <Form.Button primary>Publish blog</Form.Button>
                    </Form>
                    <NotificationDisplayer/>
                </Segment>
            </Container>
        </MasterContainer>
    )

};

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        blogs: state.blogs
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        setNotificationText: (text) => dispatch(ac_setNotification_Text(text)),
        createBlog: (config, newBlog, history) => dispatch(ac_createBlog(config, newBlog, history)),
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RouteCreateBlog);