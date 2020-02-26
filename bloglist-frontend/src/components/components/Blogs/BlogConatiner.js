import React , {useState} from 'react'
import {Card, Container, Grid, GridRow, Header, Image, Pagination, Segment} from "semantic-ui-react";
import OneBlog from "./OneBlog";
import {connect} from "react-redux";
import useResource from "../../../hooks/useResources";
import NotificationDisplayer from "../NofiticationDisplayer";


const BlogsContainer = (props)=> {

    const blogsDB = useResource('http://localhost:3003/api/blogs');
    const [page , setPage] = useState(1);
    let blogs = props.blogs;

    const PaginationArraySlicer = () => {
      if(page==1){
          return blogs.slice(0,12)
      }
      return blogs.slice(12*(page-1),24*(page-1));
    };

    if(props.searchText != null ){
          blogs = props.blogs.filter( i => (i.text.toLowerCase().includes(props.searchText.toLowerCase())|| i.title.toLowerCase().includes(props.searchText.toLowerCase())));
    }

    if(!blogs || blogs.length == 0 ){

        if(props.blogs !=0 && blogs.length==0){
            return (
                <Segment style={{height:'70vh'}}>
                    <Container>
                        <Header as={'h3'} content={'No blogs Found'}/>
                    </Container>
                </Segment>

            )
        }
        return (
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

    return(
        <Segment secondary>
            <Card.Group stacked doubling>
                {PaginationArraySlicer().map(i => <OneBlog key={i.id} db={blogsDB} blog={i}/>)}
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
                        totalPages={Math.ceil(blogs.length/12)}
                        onPageChange={(event,data) => setPage(data.activePage)}
                    />
                </GridRow>
            </Grid>

        </Segment>

    )
};

const mapStateToProps = (state)=>{
    return{
        blogs:state.blogs,
        searchText:state.searchText
    }
};

export default connect(mapStateToProps, null)(BlogsContainer);

