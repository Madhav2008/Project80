import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import RequestSomething from '../screens/RequestSomething';
import DonateSomething from '../screens/DonateSomething';
import Feedback from '../screens/Feedback';

export const AppTabNavigator = createBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'}}style={{ width: 40, height: 32 }}/>,
      tabBarLabel : "Home",
    }
  },
  'Donate A Item': {
    screen: DonateSomething,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://www.clipartkey.com/mpngs/m/53-534472_donate-svg-png-icon-free-download-transparent-donation.png'}}style={{ width: 43, height: 32 }}/>,
      tabBarLabel : "Donate A Item",
    }
  },
  'Request A Item': {
    screen: RequestSomething, 
    navigationOptions :{
      tabBarIcon : <Image  source={{uri:'https://www.pinclipart.com/picdir/big/366-3663692_icon-request-for-pro-request-for-proposal-icon.png'}}style={{ width: 33, height: 32 }}/>,
      tabBarLabel : "Request A Item",
    }
  },
  Feedback: { 
    screen: Feedback,
    navigationOptions :{
      tabBarIcon : <Image  source={{uri:'https://png.pngtree.com/png-clipart/20191120/original/pngtree-feedback-glyph-icon-vector-png-image_5058255.jpg'}}style={{ width: 35, height: 32 }}/>,
      tabBarLabel : "Feedback",
    }
  },
});