import {Button, Header, Icon, Item, Label} from "semantic-ui-react";
import React from "react";
import {ac_setNotification_Text} from "../../../reducers/notificationTextReducer";
import {ac_deleteBlog, ac_likeBlog} from "../../../reducers/blogsReducer";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const OneBlog = (props) => {

    return (
        <Item style={{marginTop: '7px', marginBottom: '7px'}}>
            <Item.Image size='tiny' src={require('../../../resources/blogIcon.png')}/>
            <Item.Content verticalAlign={'middle'}>
                <Item.Header style={{'fontSize': '1.5em', marginTop: '0.25em'}}><Link
                    to={`/blogs/${props.blog.id}`}>{props.blog.title}</Link></Item.Header>
                <Item.Meta style={{'fontSize': '1.2em', marginTop: '0.5em'}}>by <Link
                    to={`/users/${props.blog.author.id}`}>
                    <Header as={'span'} content={props.blog.author.username} color={'orange'} size={'tiny'}/>
                </Link>
                </Item.Meta>
                <Item.Description>
                    {props.blog.text.length < 300 ? props.blog.text : props.blog.text.substring(0, 300) + '...'}
                </Item.Description>
                <Item.Extra>
                    <Button as='div' labelPosition='right' floated={'left'} onClick={() => props.likeBlog(props.blog)}>
                        <Button color='red'>
                            <Icon name='heart'/>
                            Like
                        </Button>
                        <Label basic color='red' pointing='left'>
                            {props.blog.likes}
                        </Label>
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
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