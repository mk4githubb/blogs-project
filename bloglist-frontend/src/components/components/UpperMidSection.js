import {Button, Container, Divider, Grid, Header, Icon, Input, Responsive, Segment} from "semantic-ui-react";
import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {ac_setSearch_Text} from "../../reducers/searchTextReducer";
import MyStatistics from "./MyStatistics";
import {getWidth} from "./containers/DesktopContainer";


const UpperMidSection = (props) => {

    if (props.loggedInUser) {
        return (
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='search'/>
                                Find a blog
                            </Header>
                            <Input fluid placeholder='Search blogs...' value={props.searchText ? props.searchText : ''}
                                   onChange={event => props.setSearchText(event.target.value)}/>
                        </Grid.Column>
                        <Divider vertical={getWidth() > Responsive.onlyMobile.maxWidth}>Or</Divider>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='newspaper'/>
                                Create a blog
                            </Header>
                            <Button primary as={Link} to={'blogs/create/newBlog'}>Create</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }

    return (
        <Segment inverted textAlign={'center'}>
            <Header as={'h1'}
                    style={{fontSize: props.mobile ? '2em' : '4em', marginTop: props.mobile ? '1em' : '1em'}}>Minimalistic
                Blogs</Header>
            <Header as={'h2'}
                    style={{fontSize: props.mobile ? '1.2em' : '2em', marginTop: props.mobile ? '0.7em' : '1.5em'}}
                    content={'A website for all your blogging needs'}/>
            {props.loggedInUser ? null : <MyStatistics/>}
            <Divider horizontal section/>
            <Container style={{width: '50%'}}>
                <Input fluid icon={{name: 'search', circular: true, link: true}} placeholder='Search blogs...'
                       value={props.searchText ? props.searchText : ''}
                       onChange={event => {
                           props.setSearchText(event.target.value);
                           props.setPage(1);
                       }}/>
            </Container>
        </Segment>
    )
};

const mapStateToProps = state => {

    return {
        loggedInUser: state.loggedInUser,
        searchText: state.searchText
    }
};

const mapDispatchToProps = dispatch => {

    return {
        setSearchText: (text) => dispatch(ac_setSearch_Text(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpperMidSection);