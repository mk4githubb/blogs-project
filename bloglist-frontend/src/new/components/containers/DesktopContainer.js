import React,{useState} from 'react'
import {
    Button,
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header, Icon, Image,
    Menu,
    Responsive,
    Segment,
    Statistic,
    Visibility
} from "semantic-ui-react";

import {Link} from "react-router-dom";
import UpperMidSection from "../UpperMidSection";

export const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

const DesktopContainer = ({children}) => {
        const [menuFixed, setMenuFixed] = useState(false);
    return (
        <Responsive getWidth={getWidth}  minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={false} onBottomPassed={() => setMenuFixed(true)} onBottomPassedReverse={()=>setMenuFixed(false)}>
                <Menu fixed={menuFixed?'top':null}>
                    <Menu.Item><Image rounded src={require('../../../resources/wolf.png')} size={'mini'}/></Menu.Item>
                    <Menu.Item>
                        Home
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/blogs'}>About</Menu.Item>
                    <Menu.Item>Blogs</Menu.Item>
                    <Menu.Item>Users</Menu.Item>
                    <Menu.Item position={'right'}>
                        <Button.Group>
                            <Button>Login</Button>
                            <Button.Or/>
                            <Button>Sign Up</Button>
                        </Button.Group>
                    </Menu.Item>
                </Menu>
            </Visibility>
            <UpperMidSection mobile={false}/>
            <Segment>
                <Statistic/>
            </Segment>
            {children}
            <Segment inverted style={{height:'150px'}} textAlign={'left'} vertical={true}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row columns={2}>
                            <GridColumn>
                                <Header as={'h3'} content={'Links'}/>
                            </GridColumn>
                            <GridColumn>
                                <Header as={'h2'}>
                                    <Icon name={'copyright outline'}></Icon>
                                    <Header.Content>This webpage is coded by back_slash</Header.Content>
                                </Header>
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </Responsive>
    )
};

export default DesktopContainer;