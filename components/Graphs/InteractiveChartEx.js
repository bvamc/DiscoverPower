import * as React from 'react';
import LineChart from "react-native-responsive-linechart";
import {Button, Text, View} from 'react-native';

const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
const config = {
    line: {
        visible: true,
        strokeWidth: 1,
        strokeColor: "#54a0ff"
    },
    area: {
        visible: false
    },
    tooltip: {
        visible: true,
        labelFontSize: 10
    },
    grid: {
        stepSize: 10000
    },
    yAxis: {
        labelColor: "#54a0ff"
    },
    insetY: 10,
    insetX: 10
};

export class InteractiveChartEx extends React.Component {
    render() {
        return (
            <LineChart style={{flex: 1}} config={config} data={data}/>);
    };
}
