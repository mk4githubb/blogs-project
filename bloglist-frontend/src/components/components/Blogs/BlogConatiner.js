import React from 'react'
import {Card, Container, Grid, GridRow, Header, Pagination, Segment} from "semantic-ui-react";
import OneBlog from "./OneBlog";
import {connect} from "react-redux";


const BlogsContainer = (props) => {
    let blogs = props.blogs;

    if (props.searchText != null) {
        blogs = props.blogs.filter(i => (i.text.toLowerCase().includes(props.searchText.toLowerCase()) || i.title.toLowerCase().includes(props.searchText.toLowerCase())));
    }

    const PaginationArraySlicer = () => {
        if (props.page === 1) {
            return blogs.slice(0, 12)
        }
        return blogs.slice(12 * (props.page - 1), 24 * (props.page - 1));
    };

    if (props.blogs.length !== 0 && blogs.length === 0) {
        return (
            <Segment style={{height: '70vh'}}>
                <Container text style={{marginTop:'2em'}}>
                    <Header as={'h3'} content={'No Such blog'}/>
                </Container>
            </Segment>
        )
    };

    return (
        <Segment secondary  style={{minHeight: '70vh'}} loading={!blogs || blogs.length === 0}>
            <Card.Group stackable centered>
                {PaginationArraySlicer().map(i => <OneBlog key={i.id} blog={i}/>)}
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
                        totalPages={Math.ceil(blogs.length / 12)}
                        onPageChange={(event, data) => props.setPage(data.activePage)}
                    />
                </GridRow>
            </Grid>

        </Segment>

    )
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        searchText: state.searchText
    }
};

export default connect(mapStateToProps, null)(BlogsContainer);

