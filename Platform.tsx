import React, { useState } from 'react';
import { StyleSheet,View,Text,Platform } from 'react-native';
const App=()=>
{
  return(
    <View style={{flex:1,backgroundColor:'green'}}>
      <Text style={{fontSize:30}}>Platform:{Platform.OS}</Text>
      {
        Platform.OS=="android"?
                            <View style={{backgroundColor:'red', height:200,width:200}}></View>
                            :
                            <View style={{backgroundColor:'yellow',height:100,width:100}}></View>
      }
      <Text style={styles.text}>Hello</Text>
    </View>
  )
}
const styles=StyleSheet.create(
  {
    text:
    {
      color:Platform.OS=="android"?"blue":"black",
      fontSize:25
    }
  }
)
export default App;