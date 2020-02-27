import React, {useEffect} from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import BlogsContainer from "../components/Blogs/BlogConatiner";
import {Container, Header, Input, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {ac_setSearch_Text} from "../../reducers/searchTextReducer";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";

const RouteBlogs = (props) => {

    useEffect(() => {
        props.incrementPageViews()
    });

    return (
        <MasterContainer>
            <Segment secondary>
                <Container>
                    <Header as={'h2'} content={'Search Blogs'} color={'teal'}/>
                    <Input icon={{name: 'search', circular: true, link: true}} placeholder='Search...'
                           value={props.searchText ? props.searchText : ''} fluid
                           onChange={(event) => props.setSearchText(event.target.value)}/>
                </Container>
            </Segment>
            <BlogsContainer/>
        </MasterContainer>
    )
};

const mapStateToProps = state => {

    return {
        searchText: state.searchText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (text) => dispatch(ac_setSearch_Text(text)),
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBlogs);
