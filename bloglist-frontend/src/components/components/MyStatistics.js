import React from 'react'
import {Statistic} from "semantic-ui-react";
import {connect} from "react-redux";


const MyStatistics = (props) => {

    return(
        <Statistic.Group inverted widths={3} style={{marginTop:'2em'}} size={'small'}>
            <Statistic>
                <Statistic.Value>{props.blogs.length}</Statistic.Value>
                <Statistic.Label>Blogs</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>31,200</Statistic.Value>
                <Statistic.Label>Page Views</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>{props.users.length}</Statistic.Value>
                <Statistic.Label>Users</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    )
};

const mapStateToProps = (state)=>{
    return{
        blogs:state.blogs,
        users:state.users
    }
};

export default connect(mapStateToProps)(MyStatistics);