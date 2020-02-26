import {Card, Grid, Icon, List} from "semantic-ui-react";
import React from "react";
import {Link} from "react-router-dom";


const MyCard = ({mobile}) => {

    const extra = () => {

        return(
            <Grid centered>
                <List horizontal size={'massive'}>
                    <List.Item as={'a'} href={'https://github.com/monykaushik17'} target={'_blank'}>
                        <Icon name={'github'}  />
                        GitHub
                    </List.Item>
                    <List.Item as={'a'} href={'https://www.linkedin.com/in/mony-kaushik-62b96118b/'} target={'_blank'}>
                        <Icon  name={'linkedin'} />
                        LinkedIn
                    </List.Item>
                </List>
            </Grid>
        )
    };
    return(
            <Card
                image={require('../../resources/programmer.png')}
                header='back_slash'
                meta='developer in the making'
                description='Amateur Programmer, Structural Engineer, Atheist, Piscean, Swimmer'
                color={'orange'}
                raised
                centered
                extra={extra()}
            />
    )
};

export default MyCard;