import {Button, Container, Divider, Header, Icon, Item, Label, Segment} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import DeleteButtonDisplay from "../DeleteButtonDisplayLogic";
import React from "react";
import {connect} from "react-redux";
import {ac_likeBlog} from "../../../reducers/blogsReducer";
import {compose} from "redux";


const SingleBlogCard = (props) => {


    return (
        <Container style={{height: '78vh', marginTop: '4em'}}>
            <Segment padded stacked textAlign={'left'}>
                <Item style={{marginTop: '7px', marginBottom: '7px'}}>
                    <Item.Image size='large' src={require('../../../resources/blogIcon.png')}/>
                    <Item.Content verticalAlign={'middle'}>
                        <Item.Header style={{'fontSize': '1.5em', marginTop: '1em'}}><Link
                            to={`/blogs/${props.blog.id}`}>{props.blog.title}</Link></Item.Header>
                        <Item.Meta style={{'fontSize': '1.2em', marginTop: '0.5em'}}>by <Link
                            to={`/users/${props.blog.author.id}`}>
                            <Header as={'span'} content={props.blog.author.username} color={'orange'} size={'tiny'}/>
                        </Link>
                        </Item.Meta>
                        <Item.Description style={{marginTop: '0.5em'}}>
                            {props.blog.text.split('\n').map(((item, i) => <p key={i}>{item}</p>))}
                            <br/>
                        </Item.Description>
                        <Item.Extra style={{marginTop: '0.5em'}}>
                            <div>
                                <Divider/>
                                <Button as='div' labelPosition='right' floated={'left'}
                                        onClick={() => props.likeBlog(props.blog)}>
                                    <Button color='red'>
                                        <Icon name='heart'/>
                                        Like
                                    </Button>
                                    <Label basic color='red' pointing='left'>
                                        {props.blog.likes}
                                    </Label>
                                </Button>
                                <DeleteButtonDisplay blog={props.blog}/>
                                <Button floated={'right'} onClick={() => props.history.goBack()} animated
                                        attached={'bottom'}>
                                    <Button.Content visible>Go Back</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left'/>
                                    </Button.Content>
                                </Button>

                                <br/>
                            </div>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Segment>
        </Container>
    )
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        likeBlog: (blog) => dispatch(ac_likeBlog(blog))
    }
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SingleBlogCard);
