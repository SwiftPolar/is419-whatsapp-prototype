import React, { Component } from 'react';
import { Menu, Icon, Image, Input, Label } from 'semantic-ui-react';

export default class AppInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        const {uploadPhoto} = nextProps;
        if (uploadPhoto && !this.props.uploadPhoto) {
            this.processEnter({key: 'Enter'}, {}, 'image');
            this.props.uploadedPhoto();
        }
    }

    processInput(evt, data) {
        this.setState({input: data.value});
    }

    processEnter(evt, data, type) {
        const keyPress = evt.key;
        if (keyPress == 'Enter') {
            const input = this.state.input;
            type = type ? type : 'outgoing';
            Meteor.call('insertMessage', type, input, (err, res) => {});
            this.setState({input: ''});
        }
    }


    
    render() {
        return (
            <Menu borderless attached='bottom' style={{background: '#ece5dd'}} >
                <Menu.Item position='right' style={{marginRight: '-10px', width:'90%'}}>
                    <Input size='large' icon labelPosition="left" onChange={this.processInput.bind(this)} value={this.state.input}>
                        <Label onClick={this.processEnter.bind(this, {key: 'Enter'}, {}, 'system')} style={{borderRightWidth: '0px'}} basic>
                            <Icon disabled size='large' name='smile' />
                        </Label>
                        <input onKeyPress={this.processEnter.bind(this)}/>
                        <Icon size='large' name='camera'/>
                    </Input>
                </Menu.Item>
                <Menu.Item fitted position='right' onClick={this.processEnter.bind(this, {key: 'Enter'}, {}, 'incoming')} >
                    <Icon circular color="teal" size='large' name='microphone' inverted />
                </Menu.Item>
            </Menu>
        )
    }
}