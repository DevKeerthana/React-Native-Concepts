
 import React, {Component} from 'react';  
import { StyleSheet,Text, View} from 'react-native';  
  export default class App extends Component{
    render(){
        return (
          <View>
            <View style={Styles.powderblue}/>
            <View style={Styles.skyblue}/>
            <View style={Styles.steelblue}/>
          </View>
        )
    }
  }
  const Styles=StyleSheet.create({
    powderblue:
    {
      width:100,
      height:100,
      backgroundColor:'powderblue'
    },
    skyblue:
    {
      width:200,
      height:200,
      backgroundColor:'skyblue'
    },
    steelblue:
    {
      width:300,
      height:300,
      backgroundColor:'steelblue'
    }
  })
