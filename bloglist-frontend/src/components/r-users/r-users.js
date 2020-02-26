import React from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import UsersContainer from "../components/Users/UsersContainer";
import {Container, Header, Input, Segment} from "semantic-ui-react";
import {ac_setSearch_Text} from "../../reducers/searchTextReducer";
import {connect} from "react-redux";
import {ac_setUserSearch_Text} from "../../reducers/userSearchReducer";


const RouteUsers = (props) => {

    return(
        <MasterContainer>
            <Segment secondary>
                <Container>
                    <Header as={'h2'} content={'Search Users'} color={'teal'}/>
                    <Input
                        icon={{ name: 'search', circular: true, link: true }}
                        placeholder='Search...' value={props.userSearchText} fluid onChange={event => props.setUserSearchText(event.target.value)}
                    />
                </Container>
            </Segment>
            <UsersContainer/>
        </MasterContainer>
    )
};

const mapStateToProps = state => {

    return {
        userSearchText:state.userSearchText
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        setUserSearchText: (text) => dispatch(ac_setUserSearch_Text(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteUsers);

