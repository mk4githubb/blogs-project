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
                    <List.Description as='a'>API for this project is set up Heroku. Try sending HTTP requests to - the
                        link above + `/api/blogs` or `/api/users` or `/api/login` or `/api/users/:id`
                        ...</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='node' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://phonebook-mk.herokuapp.com/'} target={'_blank'}>PhoneBook
                        Application</List.Header>
                    <List.Description as='a'>My first ever web app</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='code' size='large' verticalAlign='middle'/>
                <List.Content>
                    <List.Header as='a' href={'https://github.com/monykaushik17/Job-Application-Tracker'}
                                 target={'_blank'}>Due Date Tracker</List.Header>
                    <List.Description as='a'>Built to track my assignment dates and job applications</List.Description>
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