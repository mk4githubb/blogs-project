import React from 'react'

import {Button,Modal, Rating} from 'semantic-ui-react'
import {ac_Rating_Now, ac_setRated_OFF, ac_setRated_ON} from "../../reducers/ratingReducer";
import {connect} from "react-redux";

const ModalForRating = (props) => {

    if(!props.rating.loadedOnce){
        setTimeout(()=> props.setRatedON(),15000);
    }

    return (
        <Modal size={'tiny'} centered closeIcon closeOnDocumentClick={true} open={props.rating.visible} onClose={(event) => props.setRatedOFF()}>
            <Modal.Header>Feedback time!</Modal.Header>
            <Modal.Content>
                <p>Please rate this website!</p>
                <Rating icon='star' maxRating={5} size={'massive'} onRate={(event, {rating})=> props.rateNow(rating)} />
            </Modal.Content>
            <Modal.Actions>
            <Button negative onClick={(event) => props.setRatedOFF()}>close</Button>
            <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content='Done!'
                onClick={(event) => props.setRatedOFF()}
            />
            </Modal.Actions>
    </Modal>
    );
};

const mapStateToprops = state => {
    return {
        rating:state.rating
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRatedON:()=>dispatch(ac_setRated_ON()),
        setRatedOFF:()=>dispatch(ac_setRated_OFF()),
        rateNow: (rating) => dispatch(ac_Rating_Now(rating))
    }
};

export default connect(mapStateToprops, mapDispatchToProps)(ModalForRating);
