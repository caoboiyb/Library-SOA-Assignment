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
import { withNavigation } from 'react-navigation';
import Axios from 'axios'


class DetailScreen extends PureComponent {

  static navigationOptions = {
    headerTitle: "Detail",
    tabBarLabel: "All",
    tabBarIcon: ({ focused, tintColor }) => {
      const color = focused ? "blue" : "gray"
      return (
        <Image
          source={require('../image/icons8-book-shelf-50.png')}
          style={{ width: 22, height: 22 }}
        >

        </Image>
      )
    }
  }

  state = {
    id: this.props.navigation.state.params.item.id,
    book_name: this.props.navigation.state.params.item.book_name,
    quantity: this.props.navigation.state.params.item.quantity,
    description: this.props.navigation.state.params.item.description

  }

  componentDidMount() {
    console.log(this.state)
  }

  _onChangeName = value => {
    this.setState({
      book_name: value
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

  _onUpdate = () => {
    Axios.post('http://localhost:8080/desktopAPI/adjust-book', {
      bookID: this.state.id,
      bookName: this.state.book_name,
      bookQuantity: this.state.quantity,
      bookDescription: this.state.description
    })
      .then(function (res) {
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.navigation.goBack()
  }

  _onDelete = () => {
    Axios.post('http://localhost:8080/desktopAPI/delete-book', {
      bookID: this.state.id
    })
      .then(function (res) {
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });

    this.props.navigation.goBack()
  }


  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.InputRow}>
          <Text style={styles.Label}>Name: </Text>
          <TextInput
            placeholder="Enter the name of book"
            onChangeText={this._onChangeName}
            value={this.state.book_name}
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
          <TouchableOpacity onPress={this._onUpdate} style={{ flex: 1 }}>
            <View style={[styles.Button, { backgroundColor: "#67C500" }]}>
              <Text style={styles.TextButton}>Update</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 0.5 }}></View>
          <TouchableOpacity onPress={this._onDelete} style={{ flex: 1 }}>
            <View style={[styles.Button, { backgroundColor: "#EF6C60" }]}>
              <Text style={styles.TextButton}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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

export default withNavigation(DetailScreen);