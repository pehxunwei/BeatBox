import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, List, WebView, TouchableOpacity, Image } from 'react-native';
import { Button } from 'native-base';
import Proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from 'react-navigation';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Modal from 'react-native-modal';

export default class App extends Component {

  render(){
    return(
      <SafeAreaView style={{ flex: 1,
      backgroundColor: '#f2f2f2'}}>
      <View style={styles.tempNav}>
        <Text>BeatBox</Text>
        <FontAwesome name="heartbeat" size={35}/>
      </View>
      <AppTabNavigator />
      </SafeAreaView>
    )
  }
}

class HomeScreen extends React.Component {

  render(){
    
    return (
      <View style = {{flex: 1}}>
      <WebView
        source={{uri:'http://heartratemonitor.xyz/'}}
        />
      </View>
    )
  }
}


class RecipeScreen extends React.Component {

  state = {
    isModalVisible: false
};

_toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible});
    
render(){
    return(
    <View>
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.recipe1}>
            <TouchableOpacity onPress={this._toggleModal}>
            <Image
            source={require('../Images/ChickenRice.png')}
            /></TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible}>
            
            <View style={{alignItems:'center', backgroundColor:'#fff', marginTop: 50, paddingTop: 50}}>
            <Text style={{marginBottom: 15}}>Chicken Rice</Text>
            <Text style={styles.name}>Ingredient                                           Qty</Text>
            <Text style={styles.name}>Rice                                                     4kg</Text>
            <Text style={styles.name}>Chicken Thigh                                    2kg</Text>
            <Text style={styles.name}>Chicken Stock                                      2L</Text>
            <Text style={styles.name}>Pandan Leaves                                400g</Text>
            <Text style={styles.name}>Bak Choy                                          1.1kg</Text>
            <Text style={styles.name}>Cucumber                                        200g</Text>
            

            <Text style={{paddingRight: 150, marginBottom: 5}}>Method of Cooking</Text>
            <Text style={{paddingLeft: 17}}>1. Boil rice with Pandan Leaves and Chicken Stock</Text>
            <Text style={{paddingLeft: 13}}>2.Chop Chicken Thigh into bite-slice pieces</Text>     
            <Text style={{paddingLeft: 14}}>3. Steam Chicken Thigh pieces until cooked</Text> 
            <Text style={{paddingRight: 95}}>4. Wash and boil Bak Choy</Text> 
            <Text style={{paddingRight: 145}}>5. Chop Cucumber</Text> 
            <Text style={{paddingRight: 38, paddingBottom: 10}}>6. Serve rice separate from chicken</Text> 






            <Button primary style={{marginLeft:110, marginBottom: 25}} onPress={this._toggleModal}>
            <Text style={{color:'#fff'}}>Add this to my list!</Text>
            </Button>
            </View>
            
            </Modal>
            </View>
            <View style={styles.recipe}>
            <Image
            source={require('../Images/BeefStew.png')}
            style={styles.image}
            />
            </View>
        </View>
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.recipe1}>
            <Image
            source={require('../Images/Carbonara.png')}
            style={styles.image}
            />
            </View>
            <View style={styles.recipe}>
            <Image
            source={require('../Images/ChiliCrab.png')}
            style={styles.image}
            />
            </View>
        </View>

</View>


    );
}
}

class SettingsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>That's enough for tonight</Text>
      </View>
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({

  Home: { 
    screen: HomeScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(
        <Icon name = "google-home" color={tintColor} size={24}/>
      )
    } },
  Settings: {
    screen: SettingsScreen,
    navigationOptions:{
      tabBarLabel: 'Settings',
      tabBarIcon:({tintColor})=>(
        <Icon name = "settings" color={tintColor} size={24}/>
      ) 
    } },

  Recipe: { 
    screen: RecipeScreen,
    navigationOptions:{
      tabBarLabel:'Recipe',
      tabBarIcon:({tintColor})=>(
        <Icon name = "food-variant" color={tintColor} size={24}/>
      )
    } },
},{
    initialRouteName: 'Settings',
    order:['Settings', 'Home', 'Recipe'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2'
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
})

const styles = StyleSheet.create({
  tempNav:{
      width: 100 + "%",
      height: 56,
      marginTop: -10,
      backgroundColor: '#f2f2f2',
      borderBottomWidth: StyleSheet.hairlineWidth,
      justifyContent: "center",
      alignItems: "center"
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})