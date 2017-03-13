import React, { Component } from 'react';
import { Modal, Image } from 'semantic-ui-react';
import Webcam from 'react-webcam';

export default class BioAuth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
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
    
    render() {
        return (
            <Modal dimmer='blurring' open={this.state.open} onClose={() => {this.setState({open: false})}} >
                <Modal.Header content='Authenticating Fingerprint and Iris' />
                <Modal.Content>
                    <Webcam audio={false} width='100%' height='auto' />
                    <Image size='small' src='/images/fingerprint.png' centered />
                </Modal.Content>
            </Modal>
        )
    }
}