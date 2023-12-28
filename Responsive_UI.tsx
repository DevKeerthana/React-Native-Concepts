import React from 'react';
import {View,Text} from 'react-native';
const App=()=>
{
  return(
    <View style={{flex:1,backgroundColor:"green"}}>
      <View style={{flex:2,backgroundColor:"red",flexDirection:'row'}}>
        <View style={{flex:1,margin:2,backgroundColor:"blue"}}></View>
        <View style={{flex:1,margin:2,backgroundColor:"orange"}}></View>
        <View style={{flex:1,margin:2,backgroundColor:"brown"}}></View>
      </View>
      <View style={{flex:1,backgroundColor:"red"}}></View>
      <View style={{flex:1,backgroundColor:"yellow"}}></View>
    </View>
  )
}
export default App;
