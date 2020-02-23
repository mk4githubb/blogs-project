import React from 'react'
import {Card, Segment, Image} from "semantic-ui-react";
import OneBlog from "./OneBlog";
import {connect} from "react-redux";


const BlogsContainer = (props)=> {

    let blogs = props.blogs;

    if(props.searchText != null ){
          blogs = props.blogs.filter( i => i.text.includes(props.searchText));
    }

    if(!blogs || blogs.length ==0 ){
        return (
            <Segment loading>
                <img src={require('../resources/paragraph.png')} className="ui image"/>
            </Segment>
        )
    }

    return(

        <Card.Group itemsPerRow={2}>
            {blogs.map(i => <OneBlog key={i.id} db={props.db} blog={i}/>)}
        </Card.Group>
    )
};

const mapStateToProps = (state)=>{
    return{
        blogs:state.blogs,
        searchText:state.searchText
    }
};

// const mapDispatchToProps = (dispatch)=> {
//     return{
//         setNotificationText:(data) => dispatch(ac_setNotification_Text(data)),
//         likeBlog: (db, blog) => dispatch(ac_likeBlog(db,blog)),
//         deleteBlog: (db, config, id) => dispatch(ac_deleteBlog(db, config,id))
//     }
// };

export default connect(mapStateToProps, null)(BlogsContainer);

