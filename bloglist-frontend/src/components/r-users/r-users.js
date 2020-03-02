import React, {useEffect, useState} from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import UsersContainer from "../components/Users/UsersContainer";
import {Container, Header, Input, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {ac_setUserSearch_Text} from "../../reducers/userSearchReducer";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";
import NofiticationDisplayer from "../components/NofiticationDisplayer";


const RouteUsers = (props) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        props.incrementPageViews();
        window.scroll(0,0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[null]);

    return (
        <MasterContainer>
            <Segment>
                <NofiticationDisplayer/>
                <Segment secondary style={{minHeight:'13vh'}}>
                    <Container>
                        <Header as={'h2'} content={'Search Users'} color={'blue'}/>
                        <Input
                            icon={{name: 'search', circular: true, link: true}}
                            placeholder='Search...' value={props.userSearchText ? props.userSearchText : ''} fluid
                            onChange={event => {
                                props.setUserSearchText(event.target.value);
                                setPage(1);
                            }}
                        />
                    </Container>
                </Segment>
                <UsersContainer page={page} setPage={setPage}/>
            </Segment>
        </MasterContainer>
    )
};

const mapStateToProps = state => {

    return {
        userSearchText: state.userSearchText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserSearchText: (text) => dispatch(ac_setUserSearch_Text(text)),
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteUsers);