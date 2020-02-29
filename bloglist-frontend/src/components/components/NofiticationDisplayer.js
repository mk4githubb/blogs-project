import React from 'react'
import {Message} from "semantic-ui-react";
import {connect} from "react-redux";

const NotificationDisplayer = props => {

    if (props.notificationText) {
        return <Message floating positive={props.notificationText.positive} negative={!props.notificationText.positive}>{props.notificationText.text}</Message>
    }
    return null;

};

const mapStateToProps = state => {

    return {
        notificationText: state.notificationText
    }
};

export default connect(mapStateToProps, null)(NotificationDisplayer);
