import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import Axios from 'axios';

class AddBookScreen extends PureComponent {
    state = {
        name: "",
        quantity: 0,
        description: ""
    }

    static navigationOptions = {
        headerTitle: "Add Books",
        tabBarLabel: "Add",
        tabBarIcon: ({ focused, tintColor }) => {
            const color = focused ? "blue" : "gray"
            return (
                <Image
                    source={require('../image/icons8-plus-50.png')}
                    style={{ width: 22, height: 22, tintColor: color}}
                >

                </Image>
            )
        }
    }



    _onChangeName = value => {
        this.setState({
            name: value
        })
    }

    _onChangeQuantity = value => {

        this.setState({
            quantity: Number(value)
        })

    }

    _onChangeDescription = value => {
        this.setState({
            description: value
        })
    }

    _onCancel = () => {
        this.setState({
            name: "",
            quantity: 0,
            description: ""
        })
    }

    _onAdd = () => {
        Axios.post('http://localhost:8080/desktopAPI/add-book', {
            bookName: this.state.name,
            bookQuantity: this.state.quantity,
            bookDescription: this.state.description
        })
            .then(function (res) {
                console.log(res.data)
            })
            .catch(function (error) {
                console.log(error);
            });

        this._onCancel()
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={styles.InputRow}>
                    <Text style={styles.Label}>Name: </Text>
                    <TextInput
                        placeholder="Enter the name of book"
                        onChangeText={this._onChangeName}
                        value={this.state.name}
                        style={styles.InputField}
                    />
                </View>
                <View style={styles.InputRow}>
                    <Text style={styles.Label}>Quantity: </Text>
                    <TextInput
                        placeholder="Enter the number of book"
                        onChangeText={this._onChangeQuantity}
                        value={String(this.state.quantity)}
                        keyboardType="numeric"
                        style={styles.InputField}
                    />
                </View>
                <View style={styles.InputRow}>
                    <Text style={styles.Label}>Description: </Text>
                    <TextInput
                        placeholder="Enter the description of book"
                        onChangeText={this._onChangeDescription}
                        value={this.state.description}
                        multiline={true}
                        height={100}
                        style={styles.InputField}
                    />
                </View>
                <View style={styles.ButtonWrapper}>
                    <TouchableOpacity onPress={this._onAdd} style={{ flex: 1 }}>
                        <View style={[styles.Button, { backgroundColor: "#67C500" }]}>
                            <Text style={styles.TextButton}>Add</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 0.5 }}></View>
                    <TouchableOpacity onPress={this._onCancel} style={{ flex: 1 }}>
                        <View style={[styles.Button, { backgroundColor: "#EF6C60" }]}>
                            <Text style={styles.TextButton}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddBookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    InputRow: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10
    },
    Label: {
        flex: 1,
        fontSize: 12
    },
    InputField: {
        flex: 3,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 5,
        padding: 7.5
    },
    ButtonWrapper: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "center",
        marginHorizontal: 30
    },
    Button: {
        borderRadius: 40,
        padding: 20,
        alignItems: "center"
    },
    TextButton: {
        color: "white"
    }
})