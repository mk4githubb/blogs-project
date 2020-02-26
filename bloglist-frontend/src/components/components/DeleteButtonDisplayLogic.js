import React from 'react'
import {Button, Icon} from "semantic-ui-react";
import {ac_setNotification_Text} from "../../reducers/notificationTextReducer";
import {ac_deleteBlog} from "../../reducers/blogsReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


const DeleteButtonDisplay = (props) => {

    const deleteHandler = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                Authorization: `bearer ${props.loggedInUser.webToken}`
            }
        };

        try{
            props.deleteBlog(config, props.blog.id, props.history);
        }
        catch (exception) {
            props.setNotificationText('Error deleting blog');
        }
    };

    if(props.loggedInUser && props.blog && props.loggedInUser.username == props.blog.author.username){
        return (
            <Button icon onClick={deleteHandler}>
              <Icon name={'delete'}/>
              Delete blog
            </Button>
        )
    }

    return null;
};

const mapStateToProps = state => {

    return {
        loggedInUser:state.loggedInUser
    }
};

const mapDispatchToProps = dispatch => {

    return {
        setNotificationText:(text) => dispatch(ac_setNotification_Text(text)),
        deleteBlog:(config, id, history) => dispatch(ac_deleteBlog(config,id, history))
    }
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(DeleteButtonDisplay);