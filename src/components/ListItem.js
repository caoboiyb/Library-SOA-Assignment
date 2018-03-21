import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

class ListItem extends PureComponent {
  state = {}

  _onPress = () => {
    this.props.onPressItem(this.props.item)
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, (this.props.isEven
          ? styles.evenBg
          : styles.oddBg
        )]}
        onPress={this._onPress}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontFamily: "Avenir" }}>{this.props.item.book_name}</Text>
          <Text style={this.props.item.quantity > 2
            ? styles.availableItem
            : styles.unavailableItem}>{this.props.item.quantity} items left</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10
  },
  evenBg: {
    backgroundColor: "#edf0f5"
  },
  oddBg: {
    backgroundColor: "#F7F7F7"
  },
  availableItem: {
    color: "#8e8e93"
  },
  unavailableItem: {
    color: "#ff3b30"
  }
});

export default ListItem;