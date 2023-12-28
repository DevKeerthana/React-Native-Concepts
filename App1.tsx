/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 

import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
 type Props={};
 export default class App extends Component<Props>{
  render()
  {
    //let imagePath={'C:\Users\kurub\OneDrive\Desktop\thirdApp\RN.png'};
    return(
      <View style={styles.contain}>
        <Text style={styles.welcome}>Hello World</Text>
      </View>
    );
  }
 }
 const styles=StyleSheet.create(
  {
    contain:
    {
      backgroundColor:'yellow',
      flex:10,
      justifyContent:'center',
    },
    welcome:{
      fontSize:20,
      textAlign:'center',
      margin:10,
      backgroundColor:'white',
      fontStyle:'italic'
    }
  }
 );*/
 import React, {Component} from 'react';  
import { StyleSheet,Text, View } from 'react-native';  
  
export default class App extends Component {  
    state={myState:'this is text this.componentDidCatch,created using state data.It will change or updated on clicking on it'}
    updateState=()=>this.setState({myState:'the state is updated'})
    render(){
        return(
          <View style={{backgroungColor:'purple',flex:1}}>
            <Text style={Styles.welcome} onPress={this.updateState}>{this.state.myState}</Text>
          </View>
        );
    }
}
const Styles=StyleSheet.create(
  {
    welcome:
    {
      fontSize:20,
      fontColor:'orange',
      fontStyle:'italic',
      textAlign:'center',
    }
  }
)
