import * as React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: ''
        }
    }
    handlePassChange = (pass)=> {
        console.log(pass);
        this.setState({
            pass:pass
        })
    };

    handleUserNameChange = (username)=> {
        this.setState({
            username:username
        })
    };

    signIn = ()=> {
        // Authentication
        if(this.state.username.length>0 && this.state.pass.length >0){
            console.log("Success");
            this.props.navigation.navigate('Home');
        }
        // Move to different screen
    };
    render() {
        return (<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TextInput
                style={{ alignItems:'center', justifyContent:'center', width: '75%', margin: 5,  borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.handleUserNameChange(text)}
                placeholder="Username"
                value={this.state.username}
            />
            <TextInput
                style={{ alignItems:'center', justifyContent:'center', width: '75%', margin: 5, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.handlePassChange(text)}
                value={this.state.pass}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button style={{alignItems:'center', justifyContent:'center'}} title="Sign In" onPress={this.signIn}/>

            <Text style={{flexDirection: 'row', justifyContent: 'center', width:'80%', fontStyle: 'italic', fontSize: 17,  marginTop: '40%'}}>
                Energy earns or simply burns, choice is yours.{'\n'}
                Energy misused cannot be excused.
            </Text>
        </View>);
    }
}
