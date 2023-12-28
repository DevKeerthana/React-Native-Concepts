import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default class App extends Component{
  render(){
      return(
        <View style={Styles.container}>
          <View style={Styles.powderblue}/>
          <View style={Styles.skyblue}/>
          <View style={Styles.steelblue}/>
        </View>
      )
  }
}
const Styles=StyleSheet.create(
  {
    container:
    {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
    },
    powderblue:
    {
     height:800,
      width:60,
      backgroundColor:'powderblue',
    },
    skyblue:
    {
      height:800,
      width:60,
      backgroundColor:'skyblue',
    },
    steelblue:
    {
      height:800,
      width:60,
      backgroundColor:'steelblue',
    }
  }
)