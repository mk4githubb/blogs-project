import {Button, Card, Header, Icon, Image, Label} from "semantic-ui-react";
import React from "react";
import {ac_setNotification_Text} from "../../../reducers/notificationTextReducer";
import {ac_deleteBlog, ac_likeBlog} from "../../../reducers/blogsReducer";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const OneBlog = (props) => {

    return (
            <Card centered raised color={'teal'}>
                <Card.Content textAlign={'left'}>
                    <Image floated={'right'} size={'mini'} src={require('../../../resources/blogIcon.png')}/>
                    <Card.Header><Link to={`/blogs/${props.blog.id}`}>{props.blog.title}</Link></Card.Header>
                    <Card.Meta>by <Link
                        to={`/users/${props.blog.author.id}`}><Header as={'span'} content={props.blog.author.username}
                                                                      color={'orange'}
                                                                      size={'tiny'}/></Link></Card.Meta>
                    <Card.Description>
                        {props.blog.text.length < 175 ? props.blog.text : props.blog.text.substring(0, 175) + '...'}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button as='div' labelPosition='right' floated={'left'} onClick={() => props.likeBlog(props.blog)}>
                        <Button color='red'>
                            <Icon name='heart'/>
                            Like
                        </Button>
                        <Label basic color='red' pointing='left'>
                            {props.blog.likes}
                        </Label>
                    </Button>
                </Card.Content>
            </Card>
    )
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNotificationText: (data, positive) => dispatch(ac_setNotification_Text(data, positive)),
        likeBlog: (blog) => dispatch(ac_likeBlog(blog)),
        deleteBlog: (config, id, history) => dispatch(ac_deleteBlog(config, id, history))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OneBlog);