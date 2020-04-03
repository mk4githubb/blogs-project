import React, {useEffect} from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import OneBlogURL from "../components/Blogs/OneBlogURL";
import {Container} from "semantic-ui-react";
import NotificationDisplayer from "../components/NofiticationDisplayer";
import {ac_setSearch_Text} from "../../reducers/searchTextReducer";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";
import {connect} from "react-redux";

const RoutesOneBlog = (props) => {

    useEffect(() => {
        props.incrementPageViews();
        window.scroll(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [null]);

    if (!props.blog) {
        return (
            <Container text style={{paddingTop: '4em'}}>
                <NotificationDisplayer/>
            </Container>
        )
    }

    return (
        <MasterContainer>
            <OneBlogURL blog={props.blog}/>
        </MasterContainer>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (text) => dispatch(ac_setSearch_Text(text)),
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default connect(null, mapDispatchToProps)(RoutesOneBlog);
