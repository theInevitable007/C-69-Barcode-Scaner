import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewTotal from './Screens/ViewTotalScreen'
import ScanScreen from './Screens/ScanScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'  

export default class App extends React.Component {
  render(){
  return (
    <AppContainer></AppContainer>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Scan : {screen : ScanScreen},
  Total : {screen : ViewTotal}
});
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
