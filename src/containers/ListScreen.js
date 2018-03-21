import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image
} from 'react-native';

import ListItem from '../components/ListItem'

class ListScreen extends Component {
    state = {
        data: []
    }

    componentWillMount() {
        fetch('http://localhost:8080/desktopAPI/show-book-list')
            .then(result => result.json())
            .then(data => this.setState({ data: data.booksList }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillUpdate() {
        fetch('http://localhost:8080/desktopAPI/show-book-list')
            .then(result => result.json())
            .then(data => this.setState({ data: data.booksList }));
        console.log("Update")
    }

    static navigationOptions = {
        headerTitle: "All Books",
        tabBarLabel: "All",
        tabBarIcon: ({ focused, tintColor }) => {
            const color = focused ? "blue" : "gray"
            return (
                <Image
                    source={require('../image/icons8-book-shelf-50.png')}
                    style={{ width: 22, height: 22, tintColor: color }}
                >

                </Image>
            )
        }
    }

    _onPressItem = (item) => {
        this.props.navigation.navigate("Detail", {
            item: item
        })
    }

    _keyExtractor = (item, index) => item.id

    _renderItem = ({ item, index }) => (
        <ListItem
            item={{
                id: item.id,
                book_name: item.book_name,
                quantity: item.quantity,
                description: item.description
            }}
            isEven={index % 2 === 0}
            onPressItem={this._onPressItem}
        />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default ListScreen;