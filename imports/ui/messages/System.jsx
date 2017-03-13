import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import moment from 'moment';
import 'semantic-ui-react/dist/semantic.min.css';

export default class SystemMessage extends Component {
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
            <Segment compact style={{padding: '4px', maxWidth: '75%', backgroundColor: '#b0c5ca', color: '#829498'}}>
                {this.state.message}
            </Segment>
        )
    }
}