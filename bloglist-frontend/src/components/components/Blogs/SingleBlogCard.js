import {Button, Card, Container, Header, Icon, Image, Label, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import DeleteButtonDisplay from "../DeleteButtonDisplayLogic";
import NotificationDisplayer from "../NofiticationDisplayer";
import React from "react";
import {connect} from "react-redux";
import {ac_likeBlog} from "../../../reducers/blogsReducer";


const SingleBlogCard = (props) => {

    if (!props.blog) {
        return (
            <Segment loading>
                <Image src={require('../../../resources/paragraph.png')}/>
            </Segment>
        )
    }

    return (
        <Container style={{height: '78vh', marginTop: '2em'}}>
            <Card fluid raised>
                <Card.Content textAlign={'left'}>
                    <Image
                        floated='right'
                        size='mini'
                        src={require('../../../resources/blogIcon.png')}
                    />
                    <Card.Header as={Link} to={`/blogs/${props.blog.id}`}>{props.blog.title}</Card.Header>
                    <Card.Meta as={Link} to={`/users/${props.blog.author.id}`}>by <Header as={'span'} content={props.blog.author.username}
                                                                               color={'orange'}
                                                                               size={'tiny'}/></Card.Meta>
                    <Card.Description >
                        {props.blog.text.split('\n').map(((item, i) => <p key={i}>{item}</p>))}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button as='div' labelPosition='right' floated={'left'} onClick={() => props.likeBlog(props.blog)}>
                        <Button color='red'>
                            <Icon name='heart'/>
                            Like
                        </Button>
                        <Label as='a' basic color='red' pointing='left'>
                            {props.blog.likes}
                        </Label>
                    </Button>
                    <DeleteButtonDisplay blog={props.blog}/>
                </Card.Content>
            </Card>
            <NotificationDisplayer/>
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
export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogCard);