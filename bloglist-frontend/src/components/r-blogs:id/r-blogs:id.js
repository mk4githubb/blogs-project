import React from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import OneBlogURL from "../components/Blogs/OneBlogURL";
import {Container} from "semantic-ui-react";
import NotificationDisplayer from "../components/NofiticationDisplayer";


const RoutesOneBlog = (props) =>{

    if(!props.blog){
        return (
            <Container text style={{paddingTop:'4em'}}>
                <NotificationDisplayer/>
            </Container>
        )
    }

    return(
        <MasterContainer>
            <OneBlogURL blog={props.blog}/>
        </MasterContainer>
    )
};

export default RoutesOneBlog;