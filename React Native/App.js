import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import Mainpage from './Mainpage/Mainpage';

export default class App extends Component {

  render(){
    return(
      <SafeAreaView style={{ flex: 1,
      backgroundColor: '#f2f2f2'}}>
      <Mainpage />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
