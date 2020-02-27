import React, {useEffect} from 'react'
import BlogsContainer from "../components/Blogs/BlogConatiner";
import {connect} from 'react-redux'
import UpperMidSection from "../components/UpperMidSection";
import HomePageContainer from "../components/containers/HomePageContainer";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";
import {getWidth} from "../components/containers/DesktopContainer";
import {Responsive} from "semantic-ui-react";

const LandingPage = (props) => {

    useEffect(() => {
        props.incrementPageViews()
    });

    return (
        <HomePageContainer>
            <UpperMidSection mobile={getWidth() < Responsive.onlyMobile.maxWidth}/>
            <BlogsContainer/>
        </HomePageContainer>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default connect(null, mapDispatchToProps)(LandingPage);