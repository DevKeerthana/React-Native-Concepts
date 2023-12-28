
 import React, {Component} from 'react';  
import { StyleSheet,Text, View ,Image} from 'react-native';  
  
export default class App extends Component {  
   render()
    {
      let imagePath= { uri: 'https://facebook.github.io/react-native/img/header_logo.png'}; 
      return(
        <View style={styles.container}>
        <Text style={StyleSheet.welcome}>Welcome to React Native!</Text>
        <Image source={imagePath}style={{width:250,height:250}}/>
        </View>
      );
    }
   }
   const styles=StyleSheet.create({
    container:
    {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'orange',
    },
    welcome:{
      fontSize:30,
      textAlign:'center',
      margin:20,
    }
   });
