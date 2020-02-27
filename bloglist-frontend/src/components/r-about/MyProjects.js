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
                    <List.Description as='a'>API for this website is set up at `https://api-mk.herokuapp.com/api/` and
                        supports get , post, put and delete requests on the routes `/login` , `/blogs` and
                        `/users`</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='node' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://phonebook-mk.herokuapp.com/'} target={'_blank'}>PhoneBook
                        Application</List.Header>
                    <List.Description as='a'>The first webpage I built. It supports creation and deletion of the entered
                        contacts. It is connected to a database, so changes are persistent.</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='code' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://github.com/monykaushik17/Job-Application-Tracker'}
                                 target={'_blank'}>Due Date Tracker</List.Header>
                    <List.Description as='a'>I built this JavaFX application to track my university assignments and
                        other applications. </List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='android' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://github.com/monykaushik17/Stopwatch'} target={'_blank'}>Stopwatch
                        Application</List.Header>
                    <List.Description as='a'>A basic Android stopwatch app with lap functionality</List.Description>
                </List.Content>
            </List.Item>
        </List>
    )
};

export default MyProjects;