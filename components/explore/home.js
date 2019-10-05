import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import StarReting from 'react-native-star-rating';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: '#dddddd',
          marginBottom: 20,
        }}>
        <View style={{flex: 1}}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            paddingLeft: 10,
          }}>
          <Text style={{fontSize: 10, color: '#b63838'}}>
            {this.props.type}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            {this.props.name}
          </Text>
          <Text style={{fontSize: 10}}>{this.props.price}</Text>
          {/* <StarReting disabled={true} maxStart={5} rating={4} starSize={10} /> */}
        </View>
      </View>
    );
  }
}
export default Home;
