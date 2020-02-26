import {Card, Container, Grid, GridRow, Header, Image, Pagination, Segment} from "semantic-ui-react";
import React, {useState} from 'react'
import OneUser from "./OneUser";
import {connect} from 'react-redux'

const UsersContainer = (props ) => {
    const [page , setPage] = useState(1);
    let users = props.users;

    if(props.userSearchText){
        users = users.filter(i => i.username.toLowerCase().includes(props.userSearchText.toLowerCase()));
    }

    const PaginationArraySlicer = () => {
        if(page==1){
            return users.slice(0,10)
        }
        return users.slice(10*(page-1),20*(page-1));
    };

    if(!props.users || users.length==0){

        if (props.users!=0 && users.length==0){
            return (
                <Segment style={{height:'70vh'}}>
                    <Container>
                        <Header as={'h2'} content={'No such user'}/>
                    </Container>
                </Segment>
            )
        }
        return(
            <Segment loading style={{height:'70vh'}}>
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

    return (
        <Segment>
            <Card.Group stacked >
                {PaginationArraySlicer().map(i => <OneUser key={i.id} user={i}/>)}
            </Card.Group>
            <Grid centered>
                <GridRow>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={page}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={Math.ceil(users.length/10)}
                        onPageChange={(event,data) => setPage(data.activePage)}
                    />
                </GridRow>
            </Grid>
        </Segment>
    )

};

const mapStateToProps = (state) => {
    return{
        users:state.users,
        userSearchText:state.userSearchText
    }
};
export default connect(mapStateToProps)(UsersContainer);