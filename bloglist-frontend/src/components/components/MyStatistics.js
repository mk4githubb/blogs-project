import React from 'react'
import {Responsive, Statistic} from "semantic-ui-react";
import {connect} from "react-redux";
import {getWidth} from "./containers/DesktopContainer";


const MyStatistics = (props) => {

    return (
        <Statistic.Group inverted widths={3} style={{marginTop: '2em'}}
                         size={getWidth() > Responsive.onlyMobile.maxWidth ? 'small' : 'mini'}>
            <Statistic>
                <Statistic.Value>{props.blogs.length}</Statistic.Value>
                <Statistic.Label>Blogs</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>{props.pageViews}</Statistic.Value>
                <Statistic.Label>Page Views</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>{props.users.length}</Statistic.Value>
                <Statistic.Label>Users</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    )
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        users: state.users,
        pageViews: state.pageViews
    }
};

export default connect(mapStateToProps)(MyStatistics);