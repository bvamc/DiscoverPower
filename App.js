import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from './screen/HomeScreen';
import { PowerComparision } from './screen/PowerComparision';
import {SignIn} from './screen/SignIn';

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: PowerComparision,
      SignIn: SignIn
    },
    {
      initialRouteName: 'SignIn',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
