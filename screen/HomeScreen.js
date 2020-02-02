import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {faPlug} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <WebView
                    source={{uri: 'https://public.tableau.com/views/UserPowerConsumption/Comparetoothers?%3Aembed=y&%3AshowVizHome=no&%3Adisplay_count'}}
                    javaScriptEnabled={true}/>
                <Text>Home Screen</Text>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')} style={{paddingVertical: 15}}>
                    <Text style={{ paddingTop: '30%', fontSize: 14, color: '#2e78b7'}}>
                        Check your power consumption <FontAwesomeIcon icon= {faPlug} />
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
