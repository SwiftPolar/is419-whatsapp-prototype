import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Messages} from '../../api/chat/chat';
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import moment from 'moment';
import 'semantic-ui-react/dist/semantic.min.css';

import OutgoingMessage from './Outgoing';
import IncomingMessage from './Incoming';
import SystemMessage from './System';

const Conversation = class extends Component {
    constructor(props) {
        super(props);

        let {messages} = props;
        
        this.state = {
            messages: messages,
        };
    }

    componentWillReceiveProps(nextProps) {
        let {messages} = nextProps;
        if (messages) {
            this.setState({
                messages
            });
        }
    }

    getMessages() {
        let messages = this.state.messages;
        console.log()
        let results = [];
        let count = 0;

        messages.map((msg) => {
            let {type, message, createdAt} = msg;

            switch(type) {
                case 'system':
                    results.push(
                        <Grid.Row centered key={'system-message-' + count} style={{paddingBottom: '0px'}}>
                            <SystemMessage message={message} date={createdAt} />
                        </Grid.Row>
                    )
                    break;

                case 'incoming':
                    results.push (
                        <Grid.Row columns={1} key={'incoming-message-' + count} style={{paddingBottom: '0px'}}>
                            <Grid.Column><IncomingMessage message={message} date={createdAt} /></Grid.Column>
                        </Grid.Row>
                    );
                    
                    break; 

                case 'outgoing':
                    results.push (
                        <Grid.Row columns={1} key={'outgoing-message-' + count} style={{paddingBottom: '0px'}}>
                            <Grid.Column><OutgoingMessage message={message} date={createdAt} /></Grid.Column>
                        </Grid.Row>
                    );
                    
                    break;
                

            }

            count++;
        });

        return results;

    }

    render() {
        return(
            <Grid>
                {this.getMessages()}
            </Grid>
        )
    }
}

export default createContainer(({params}) => {
    const messageHandle = Meteor.subscribe('getMessages');
    const messageLoading = !messageHandle.ready();
    const messages = Messages.find({}, {sort: {createdAt: 1}}).fetch();
    return {
        messages: messageLoading ? [] : messages,
    };
}, Conversation);