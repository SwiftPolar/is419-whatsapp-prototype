import React, { Component } from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';
import 'semantic-ui-react/dist/semantic.min.css';

export default class OutgoingMessage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "Lee Chian Yee is very cute and pretty. She is very good in badminton and I want to be as good as her!"
        };
    }

    componentWillReceiveProps(nextProps) {
        let {message} = nextProps;
        this.setState({
            message: message 
        });
    }

    render() {
        return(
            <Segment compact floated="right" style={{padding: '7px', maxWidth: '75%', backgroundColor: '#dcf8c6'}}>
                <div style={{paddingRight: '40px', paddingBottom: '5px'}}>{this.state.message}</div>
                <Label attached='bottom right' style={{background: 'none', color: '#999999'}}>
                    13:53<Icon.Group><Icon name='checkmark'/><Icon style={{paddingLeft: '3px', paddingTop: '1px'}} name='checkmark'/></Icon.Group>
                </Label>
            </Segment>
        )
    }
}