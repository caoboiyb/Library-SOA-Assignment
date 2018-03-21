import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import AddBookScreen from './containers/AddBookScreen';
import DetailScreen from './containers/DetailScreen';
import ListScreen from './containers/ListScreen';

const AddScreen = StackNavigator({
    AddScreen: { screen: AddBookScreen }
})

const StackScreen = StackNavigator({
    List: {
        screen: ListScreen
    },
    Detail: {
        screen: DetailScreen
    }
})


const AppWithNavigator = TabNavigator({
    Add: { screen: AddScreen },
    All: { screen: StackScreen }
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        activeTintColor: "blue"
    }

)


export default AppWithNavigator;