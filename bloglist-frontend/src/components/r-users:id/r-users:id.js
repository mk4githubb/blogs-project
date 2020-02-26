import React, {useState} from 'react'
import MasterContainer from "../components/containers/MasterContainer";
import {
    Button,
    Container,
    Divider,
    Grid,
    GridRow,
    Header,
    Icon,
    Input,
    List,
    Pagination,
    Segment
} from "semantic-ui-react";
import {Link} from "react-router-dom";

const RoutesOneUser = ({user}) => {
    const [page, setPage] = useState(1);

    if(!user){
        return null;
    }

    const PaginationBlogPostsArraySlicer = () => {
        if(page==1){
            return user.blogPosts.slice(0,10)
        }
        return user.blogPostss.slice(10*(page-1),20*(page-1));
    };

    const listItems = () => {

        if(user.blogPosts.length==0){
         return <Container >
                    <Header as={'h4'} content={"The user hasn't published any blogs"} style={{marginTop:'4em'}}/>
                </Container>
        }
        return PaginationBlogPostsArraySlicer().map(i => <List.Item>
                                            <List.Icon name='newspaper' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header as={Link} to={`/blogs/${i.id}`}>{i.title}</List.Header>
                                                <List.Description as='a'>{i.text.substring(0,100) + '...'}</List.Description>
                                            </List.Content>
                                        </List.Item>);
    };


    return(
        <MasterContainer>
            <Container style={{marginTop:'2em'}}>
                <Header as='h1' icon={'user'} content={`User Profile`}/>
                <Divider/>
                <Header as={'h1'} content={user.username}/>
                <Container>
                    <Header as={'h2'} content={`Blogs by ${user.username}`}/>
                    <List>
                        {listItems()}
                    </List>
                    <Grid centered stackable>
                        <GridRow>
                            <Button floated={'right'} as={Link} to={'/users'} animated floated={'right'} attached={'bottom'} >
                                <Button.Content visible>Go Back</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow left' />
                                </Button.Content>
                            </Button>
                        </GridRow>
                        <GridRow>
                            <Pagination
                                boundaryRange={0}
                                defaultActivePage={page}
                                ellipsisItem={null}
                                firstItem={null}
                                lastItem={null}
                                siblingRange={1}
                                totalPages={Math.ceil(user.blogPosts.length/10)}
                                onPageChange={(event,data) => setPage(data.activePage)}
                            />
                        </GridRow>
                    </Grid>
                </Container>
            </Container>
        </MasterContainer>
    )
};


export default RoutesOneUser;

