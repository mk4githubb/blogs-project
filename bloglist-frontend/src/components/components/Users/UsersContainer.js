import {Card, Container, Grid, GridRow, Header, Pagination, Segment} from "semantic-ui-react";
import React from 'react'
import OneUser from "./OneUser";
import {connect} from 'react-redux'

const UsersContainer = (props) => {
    let users = props.users;

    if (props.userSearchText != null) {
        users = users.filter(i => i.username.toLowerCase().includes(props.userSearchText.toLowerCase()));
    }

    const PaginationArraySlicer = () => {
        if (props.page === 1) {
            return users.slice(0, 10)
        }
        return users.slice(10 * (props.page - 1), 20 * (props.page - 1));
    };


    if (props.users.length !== 0 && users.length === 0) {
        return (
            <Segment style={{height: '70vh'}}>
                <Container text style={{marginTop:'2em'}}>
                    <Header as={'h2'} content={'No Such User'}/>
                </Container>
            </Segment>
        )
    }

    return (
        <Segment style={{minHeight: '70vh'}} loading={!users || users.length === 0}>
            <Card.Group stackable doubling centered>
                {PaginationArraySlicer().map(i => <OneUser key={i.id} user={i}/>)}
            </Card.Group>
            <Grid centered>
                <GridRow>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={props.page}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={Math.ceil(users.length / 10)}
                        onPageChange={(event, data) => props.setPage(data.activePage)}
                    />
                </GridRow>
            </Grid>
        </Segment>
    )

};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        userSearchText: state.userSearchText
    }
};
export default connect(mapStateToProps)(UsersContainer);