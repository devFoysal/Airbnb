import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

// Icon
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import Explore from './screens/explore';
import Saved from './screens/saved';
import Trips from './screens/trips';
import Inbox from './screens/inbox';
import Profile from './screens/profile';

export default createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({tinColor}) => <Icon name="md-search" size={24} />,
      },
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({tinColor}) => <Icon name="md-heart" size={24} />,
      },
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({tinColor}) => (
          <Image
            source={require('./assets/img/icons/airbnb.png')}
            style={{height: 24, width: 24}}
          />
        ),
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'INBOX',
        tabBarIcon: ({tinColor}) => <Icon name="md-chatboxes" size={24} />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({tinColor}) => <Icon name="md-person" size={24} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 3,
      },
    },
  },
);
