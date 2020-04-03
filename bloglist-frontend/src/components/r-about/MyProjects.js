import {List} from "semantic-ui-react";
import React from "react";

const MyProjects = () => {

    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name='node' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://api-mk.herokuapp.com/'} target={'_blank'}>API for this
                        website</List.Header>
                    <List.Description>API for this website is set up at <a href={'https://api-mk.herokuapp.com/api/'}
                                                                           target={'_blank'}
                                                                           rel="noopener noreferrer">https://api-mk.herokuapp.com/api/ </a> and
                        supports appropriate HTTP get , post, put and delete requests on the routes `/login` , `/blogs`
                        , `/users` , `/pageviews` and `/ratings`</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='node' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://phonebook-mk.herokuapp.com/'} target={'_blank'}
                                 rel="noopener noreferrer">PhoneBook
                        Application</List.Header>
                    <List.Description>This is the first webpage I built. It supports creation and deletion of the
                        entered
                        contacts. It is built with MERN stack and connected to a database.</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='code' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://github.com/monykaushik17/Job-Application-Tracker'}
                                 target={'_blank'} rel="noopener noreferrer">Due Date Tracker</List.Header>
                    <List.Description>I built this UI application to keep track of my assignment dates, job and other
                        applications. </List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='android' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://github.com/monykaushik17/Stopwatch'} target={'_blank'}
                                 rel="noopener noreferrer">Stopwatch
                        Application</List.Header>
                    <List.Description>A basic Android stopwatch app with lap functionality.</List.Description>
                </List.Content>
            </List.Item>
        </List>
    )
};

export default MyProjects;