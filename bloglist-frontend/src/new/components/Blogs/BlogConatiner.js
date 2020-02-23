import React from 'react'
import {Card, Image, Segment} from "semantic-ui-react";
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
                <Image.Group size={'large'}>
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                    <Image src={require('../../../resources/paragraph.png')} />
                </Image.Group>
            </Segment>
        )
    }

    return(

        <Card.Group>
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

