import React, { Component } from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';
import 'semantic-ui-react/dist/semantic.min.css';

export default class IncomingMessage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "",
            date: new Date()
        };
    }

    componentWillReceiveProps(nextProps) {
        let {message, date} = nextProps;
        this.setState({
            message: message,
            date: date 
        });
    }

    render() {
        return(
            <Segment compact floated="left" style={{padding: '7px', maxWidth: '75%', backgroundColor: '#fefeff'}}>
                <div style={{paddingRight: '40px', paddingBottom: '5px'}}>{this.state.message}</div>
                <Label attached='bottom right' style={{background: 'none', color: '#999999'}}>
                    13:53
                </Label>
            </Segment>
        )
    }
}