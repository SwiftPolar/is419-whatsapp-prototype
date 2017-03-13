import React, { Component } from 'react';
import { Modal, Image, Icon, Header } from 'semantic-ui-react';
import Webcam from 'react-webcam';

export default class BioAuth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            verified: false
        };
    }

    componentWillReceiveProps(nextProps) {
        let {open} = nextProps;
        this.setState({open});
    }

    resizeModal(evt, data) {
        console.log(evt);
        console.log(data);
    }

    getModalContent() {
        return this.state.verified ? (
            <Modal.Content>
                <center>
                    <Icon size='massive' name='checkmark' />
                    <Header as='h1'>Success</Header>
                    
                </center>
            </Modal.Content>
        ) : (
            <Modal.Content>
                <Webcam audio={false} width='100%' height='auto' />
                <Image size='small' src='/images/fingerprint.png' centered onClick={
                    () => {Meteor.setTimeout(() => {
                        this.setState({verified: true});
                    }, 2000)}
                    } />
            </Modal.Content>
        );
    }
    
    render() {
        return (
            <Modal dimmer='blurring' open={this.state.open} onClose={() => {this.setState({open: false, verified: false})}} >
                <Modal.Header content='Authenticating Fingerprint and Iris' />
                {this.getModalContent()}
            </Modal>
        )
    }
}