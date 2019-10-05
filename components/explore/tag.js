import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Tag extends Component {
  render() {
    return (
      <View
        style={{
          minWidth: 40,
          minHeight: 20,
          padding: 5,
          borderRadius: 2,
          borderWidth: 0.2,
          borderColor: '#dddddd',
          backgroundColor: '#ffffff',
          marginRight: 5,
        }}>
        <Text style={{fontSize: 10, fontWeight: '700'}}>{this.props.name}</Text>
      </View>
    );
  }
}
export default Tag;
