import React, { Component } from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import 'semantic-ui-react/dist/semantic.min.css';

export default class IncomingMessage extends Component {
    constructor(props) {
        super(props);
        let {message, date} = props;
        
        this.state = {
            message: message ? message : "",
            date: date ? date : new Date()
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
                <div style={{paddingRight: '50px', paddingBottom: '10px'}}>{this.state.message}</div>
                <Label attached='bottom right' style={{background: 'none', color: '#999999'}}>
                    {moment(this.state.date).format('HH:mm')}
                </Label>
            </Segment>
        )
    }
}