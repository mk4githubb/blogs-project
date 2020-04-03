import React, {useEffect, useState} from 'react'
import BlogsContainer from "../components/Blogs/BlogConatiner";
import {connect} from 'react-redux'
import UpperMidSection from "../components/UpperMidSection";
import HomePageContainer from "../components/containers/HomePageContainer";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";
import {getWidth} from "../components/containers/DesktopContainer";
import {Responsive} from "semantic-ui-react";
import NofiticationDisplayer from "../components/NofiticationDisplayer";
import ModalForRating from "../components/Rating";


const LandingPage = (props) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        props.incrementPageViews();
        window.scroll(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [null]);

    return (
        <HomePageContainer>
            <ModalForRating/>
            <NofiticationDisplayer/>
            <UpperMidSection mobile={getWidth() < Responsive.onlyMobile.maxWidth} setPage={setPage}/>
            <BlogsContainer page={page} setPage={setPage} landingPage={true}/>
        </HomePageContainer>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementPageViews: () => dispatch(ac_incrementPageViews()),
    }
};

export default connect(null, mapDispatchToProps)(LandingPage);