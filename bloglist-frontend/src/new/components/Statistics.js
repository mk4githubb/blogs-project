import React from 'react'
import {Statistic} from "semantic-ui-react";


const Statistics = () => {

    return(
        <Statistic.Group widths={3} style={{border:'2px solid red'}}>
            <Statistic>
                <Statistic.Value>22</Statistic.Value>
                <Statistic.Label>Faves</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>31,200</Statistic.Value>
                <Statistic.Label>Views</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>22</Statistic.Value>
                <Statistic.Label>Members</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    )
};

export default Statistics;