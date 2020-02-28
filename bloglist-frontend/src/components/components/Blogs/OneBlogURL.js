import React from 'react'
import { Grid, GridRow} from "semantic-ui-react";
import {connect} from 'react-redux'
import {ac_setNotification_Text} from "../../../reducers/notificationTextReducer";
import {ac_likeBlog} from '../../../reducers/blogsReducer';
import CardDisplayLogic from "./CardDisplayLogic";

const OneBlogURL = (props) => {

    if (!props.blog) {
        return null;
    }

    return (
        <Grid>
            <GridRow columns={1} centered>
                <CardDisplayLogic blog={props.blog}/>
            </GridRow>
        </Grid>
    )
};



// const mapStateToProps = (state) => {
//     return {
//         loggedInUser: state.loggedInUser,
//         notificationText: state.notificationText,
//         users: state.users
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setNotificationText: (data) => dispatch(ac_setNotification_Text(data)),
//         likeBlog: (blog) => dispatch(ac_likeBlog(blog)),
//     }
// };

export default OneBlogURL;