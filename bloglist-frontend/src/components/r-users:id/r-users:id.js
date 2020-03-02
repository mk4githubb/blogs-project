import React, {useEffect, useState} from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import {Button, Container, Divider, Grid, GridRow, Header, Icon, List, Pagination, Segment} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import {ac_incrementPageViews} from "../../reducers/pageViewsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import NofiticationDisplayer from "../components/NofiticationDisplayer";

const RoutesOneUser = (props) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        props.incrementPageViews();
        window.scroll(0,0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[null]);

    if (!props.user) {
        return null;
    }

    const PaginationBlogPostsArraySlicer = () => {
        if (page === 1) {
            return props.user.blogPosts.slice(0, 10)
        }
        return props.user.blogPosts.slice(10 * (page - 1), 20 * (page - 1));
    };

    const listItems = () => {

        if (props && props.user.blogPosts.length === 0) {
            return <Container>
                <Header as={'h4'} content={"The user hasn't published any blogs"} style={{marginTop: '4em'}}/>
            </Container>
        }
        return PaginationBlogPostsArraySlicer().map(i => <List.Item key={i.id}>
            <List.Icon name='newspaper' size='large' verticalAlign='middle'/>
            <List.Content>
                <List.Header as={Link} to={`/blogs/${i.id}`}>{i.title}</List.Header>
                <List.Description as='a'>{i.text.substring(0, 100) + '...'}</List.Description>
            </List.Content>
        </List.Item>);
    };

    return (
        <MasterContainer>
            <NofiticationDisplayer/>
            <Segment>
                <Container style={{marginTop: '2em'}}>
                    <Header as='h1' icon={'user'} content={`User Profile`} color={'grey'}/>
                    <Divider/>
                    <Header as={'h1'} color={'blue'}><Link to={`/users/${props.user.id}`}>{props.user.username}</Link></Header>
                    <Container style={{minHeight:'70vh'}}>
                        <Header as={'h2'} content={`Blogs by ${props.user.username}`} color={'grey'}/>
                        <List>
                            {listItems()}
                        </List>
                        <Grid centered stackable>
                            <GridRow>
                                <Button floated={'right'} onClick={() => props.history.goBack()} animated
                                        attached={'bottom'}>
                                    <Button.Content visible>Go Back</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left'/>
                                    </Button.Content>
                                </Button>
                            </GridRow>
                            <GridRow>
                                <Pagination
                                    boundaryRange={0}
                                    defaultActivePage={page}
                                    ellipsisItem={null}
                                    firstItem={null}
                                    lastItem={null}
                                    siblingRange={1}
                                    totalPages={Math.ceil(props.user.blogPosts.length / 10)}
                                    onPageChange={(event, data) => setPage(data.activePage)}
                                />
                            </GridRow>
                        </Grid>
                    </Container>
                </Container>
            </Segment>
        </MasterContainer>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementPageViews: () => dispatch(ac_incrementPageViews())
    }
};

export default compose(withRouter, connect(null, mapDispatchToProps))(RoutesOneUser);
