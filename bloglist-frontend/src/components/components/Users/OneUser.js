import React from 'react'
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";

const OneUser = ({user}) => {

    return (
        <Card
            as={Link}
            to={`/users/${user.id}`}
            image={require(`../../../resources/avatars/image${Math.floor(Math.random() * 5) + 1}.png`)}
            header={user.username}
            meta={`${user.blogPosts.length} blogs`}
            raised
            color={'teal'}
        />
    )
};

export default OneUser;