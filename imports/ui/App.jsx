import React, { Component } from 'react';
import { Grid, Container, Segment, Menu, Icon, Image, Header, Input, Label } from 'semantic-ui-react';
import 'semantic-ui-react/dist/semantic.min.css';

import Conversation from './messages/Conversation';
import AppInput from './Input';
import BioAuth from './BiometricAuth';

export default class App extends Component {
    
    constructor(props) {
        super(props);

        let windowHeight = window.innerHeight;

        const handleResize = () => {
            this.setState({
                windowHeight: window.innerHeight,
                chatBodyHeight: document.getElementById('chatBody').offsetHeight
            });
        };

        this.state = {
            handleResize,
            windowHeight: windowHeight,
            chatBodyHeight: windowHeight - 128,
            open: false,
            uploadPhoto: false,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.state.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.state.handleResize);
    }

    uploadedPhoto() {
        this.setState({uploadPhoto: false});
    }

    render() {
        return (
            <Grid centered columns={1}>
                <Grid.Column>
                    <Menu borderless attached style={{background: '#075e54'}}>
                        <Menu.Item><Icon inverted size='large' name="arrow left" /></Menu.Item>
                        <Menu.Item>
                            <Header inverted as='h4'>
                                <Image src='images/avatar.png' avatar/>
                                <Header.Content>
                                    BankingButler
                                    <Header.Subheader>online</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Menu.Item>

                        <Menu.Menu position='right'>
                            <Menu.Item fitted><Icon inverted size='large' name="phone" /></Menu.Item>
                            <Menu.Item onClick={() => {this.setState({uploadPhoto: true})}} ><Icon inverted size='large' name="attach" /></Menu.Item>
                            <Menu.Item fitted onClick={()=>{this.setState({open: true})}}><Icon inverted size='large' name='ellipsis vertical' /></Menu.Item>
                        </Menu.Menu>
                    </Menu>

                    <Segment basic attached style={{border: 'none', background: '#ece5dd', overflowX: 'auto', maxHeight: this.state.chatBodyHeight + 'px', minHeight: this.state.chatBodyHeight + 'px'}}>
                        <Conversation />

                    </Segment>

                    <AppInput uploadPhoto={this.state.uploadPhoto} uploadedPhoto={this.uploadedPhoto.bind(this)} />
                </Grid.Column>
                <BioAuth open={this.state.open} />
            </Grid>
        )
    }
}