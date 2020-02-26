import React from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import BlogsContainer from "../components/Blogs/BlogConatiner";
import {Container, Header, Image, Input, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {ac_setNotification_Text} from "../../reducers/notificationTextReducer";
import {ac_login} from "../../reducers/loggedInUserReducer";
import {ac_setSearch_Text} from "../../reducers/searchTextReducer";

const RouteBlogs = (props) => {

    return(
        <MasterContainer>
            <Segment secondary>
                <Container>
                    <Header as={'h2'} content={'Search Blogs'} color={'teal'}/>
                    <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' value={props.searchText} fluid onChange={(event) => props.setSearchText(event.target.value)} />
                </Container>
            </Segment>
            <BlogsContainer/>
        </MasterContainer>
    )
};

const mapStateToProps = state => {

    return {
        searchText:state.searchText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (text) => dispatch(ac_setSearch_Text(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBlogs);
