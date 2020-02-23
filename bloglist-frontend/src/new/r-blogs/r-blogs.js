import React from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import BlogsContainer from "../components/Blogs/BlogConatiner";
import {Image} from "semantic-ui-react";

const RouteBlogs = () => {

    return(
        <MasterContainer>
            <Image src={require('../../resources/paragraph.png')}/>
        </MasterContainer>
    )
};

export default RouteBlogs;