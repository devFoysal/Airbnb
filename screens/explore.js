import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

// Icon
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/explore/category';
import Home from '../components/explore/home';
import Tag from '../components/explore/tag';
const {height, width} = Dimensions.get('window');
class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp',
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: 'clamp',
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: '#ffffff',
                marginHorizontal: 20,
                marginVertical: 5,
                elevation: 2,
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Icon name="md-search" size={20} style={{paddingRight: 5}} />
              <TextInput
                placeholder="Try Dhaka"
                placeholderTextColor="gray"
                style={{flex: 1, fontWeight: '700', backgroundColor: '#ffffff'}}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                position: 'relative',
                top: this.animatedTagTop,
                opacity: this.animatedOpacity,
              }}>
              <Tag name="Guests" />
              <Tag name="Dates" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {contentOffset: {y: this.scrollY}},
              },
            ])}>
            <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: 'gray',
                  paddingHorizontal: 20,
                }}>
                What can we help you find,{' '}
                <Text style={{fontSize: 18, fontWeight: '700'}}>Foysal? </Text>
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category
                    imageUri={require('../assets/img/thumbnail/2.jpg')}
                    name="Home"
                  />
                  <Category
                    imageUri={require('../assets/img/thumbnail/3.jpg')}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require('../assets/img/thumbnail/4.jpg')}
                    name="Resturant"
                  />
                </ScrollView>
              </View>
              <View style={{marginTop: 40, paddingHorizontal: 20}}>
                <Text style={{fontSize: 18, fontWeight: '700', color: 'gray'}}>
                  Intruducing Airbnb Plus
                </Text>
                <Text style={{fontWeight: '100', marginTop: 10}}>
                  A new selection of homes verified for quality & comfort
                </Text>
                <View style={{width: width - 40, height: 200, marginTop: 20}}>
                  <Image
                    source={require('../assets/img/thumbnail/1.jpg')}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'cover',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#dddddd',
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 40, paddingHorizontal: 20}}>
              <Text style={{fontSize: 18, fontWeight: '700', color: 'gray'}}>
                Intruducing Airbnb Plus
              </Text>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                <Home
                  width={width}
                  name="The Cozy Placy"
                  type="PRIVATE ROOM - 2 BEDS"
                  price="82$"
                  imageUri={require('../assets/img/thumbnail/4.jpg')}
                />
                <Home
                  width={width}
                  name="The Cozy Placy"
                  type="PRIVATE ROOM - 2 BEDS"
                  price="82$"
                  imageUri={require('../assets/img/thumbnail/2.jpg')}
                />
                <Home
                  width={width}
                  name="The Cozy Placy"
                  type="PRIVATE ROOM - 2 BEDS"
                  price="82$"
                  imageUri={require('../assets/img/thumbnail/5.jpg')}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;
