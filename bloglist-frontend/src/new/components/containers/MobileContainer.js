import React, {useState} from 'react'
import {
    Responsive,
    Sidebar,
    Menu,
    Segment,
    Header,
    Button,
    Container,
    Icon,
    Statistic, Grid,
} from "semantic-ui-react";
import {getWidth} from "./DesktopContainer";
import UpperMidSection from "../UpperMidSection";

const MobileContainer = ({children}) => {
    const [visible, setVisible] = useState(false);

    return(
        <Responsive  as={Sidebar.Pushable}
                     getWidth={getWidth}
                     maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'> Home </Menu.Item>
                <Menu.Item as='a'> About </Menu.Item>
                <Menu.Item as='a'> Blogs </Menu.Item>
                <Menu.Item as='a'> Users </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
                <Segment inverted
                         textAlign='center'
                         style={{ minHeight: 350, padding: '1em 0em' }}
                         vertical>
                    <Container>
                        <Menu>
                            <Menu.Item position={'left'}> <Icon name={'sidebar'} onClick={() => setVisible(!visible)}/> </Menu.Item>
                            <Menu.Item position={'right'}>
                                <Button.Group>
                                    <Button>Login</Button>
                                    <Button.Or/>
                                    <Button>Sign Up</Button>
                                </Button.Group>
                            </Menu.Item>
                        </Menu>
                    </Container>
                    <UpperMidSection mobile={true}/>
                </Segment>
                <Segment textAlign={'center'}>
                   <Statistic/>
                </Segment>
            </Sidebar.Pusher>
            {children}
            <Segment inverted>
                <Grid>
                    <Grid.Row>
                        <Header as={'h3'} content={'Links'}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Header as={'h4'}>
                            <Icon name={'copyright outline'}></Icon>
                            <Header.Content>This webpage is coded by back_slash</Header.Content>
                        </Header>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Responsive>
    )

};

export default MobileContainer;