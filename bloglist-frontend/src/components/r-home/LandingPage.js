import React from 'react'

import BlogsContainer from "../components/Blogs/BlogConatiner";
import {ac_setNotification_Text} from "../../reducers/notificationTextReducer";
import {ac_setLoggedInUserFromLS} from "../../reducers/loggedInUserReducer";
import {ac_InitBlogs} from "../../reducers/blogsReducer";
import {ac_initUsers} from "../../reducers/usersReducer";
import {connect} from 'react-redux'
import UpperMidSection from "../components/UpperMidSection";
import {Responsive, Segment, Statistic} from "semantic-ui-react";
import HomePageContainer from "../components/containers/HomePageContainer";
import MyStatistics from "../components/MyStatistics";

const LandingPage = (props) => {
    return(
        <HomePageContainer>
            <UpperMidSection mobile={false}/>
            <BlogsContainer/>
        </HomePageContainer>
    )
};

const mapStateToProps = (state)=>{
    return{
        blogs:state.blogs,
        loggedInUser:state.loggedInUser,
        notificationText:state.notificationText,
        users:state.users
    }
};

const mapDispatchToProps = (dispatch)=> {
    return{
        setNotificationText:(data) => dispatch(ac_setNotification_Text(data)),
        setLoggedInUser:(data)=>dispatch(ac_setLoggedInUserFromLS(data)),
        initBlogs: (db) => dispatch(ac_InitBlogs(db)),
        initUsers:(db)=> dispatch(ac_initUsers(db))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);