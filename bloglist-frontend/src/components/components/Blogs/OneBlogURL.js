import React from 'react'
import {Grid, GridRow} from "semantic-ui-react";
import CardDisplayLogic from "./SingleBlogCard";

const OneBlogURL = (props) => {

    if (!props.blog) {
        return null;
    }

    return (
        <Grid>
            <GridRow columns={1} centered>
                <CardDisplayLogic blog={props.blog}/>
            </GridRow>
        </Grid>
    )
};

export default OneBlogURL;