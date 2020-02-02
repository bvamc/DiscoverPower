import * as React from 'react';
import {View} from 'react-native';
import { WebView } from 'react-native-webview';
export class PowerComparision extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
            <WebView
                source={{uri: 'https://public.tableau.com/views/UserPowerConsumption/Comparetoothers?%3Aembed=y&%3AshowVizHome=no&%3Adisplay_count'}}
                javaScriptEnabled={true}/>
            </View>
        );
    }
}
