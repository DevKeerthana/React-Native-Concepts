import React, { useState } from 'react';
import { StyleSheet,View,StatusBar,Button } from 'react-native';
const App=()=>
{
  const [hide,setHide]=useState(false);
  const [barstyle,setBarStyle]=useState("light-content");
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor="orange" barStyle={barstyle} hidden={hide}/>
      <Button title='toggle Status bar' onPress={()=>setHide(!hide)}/>
      <View style={{marginBottom:10}}></View>
      <Button title='update style' onPress={()=>setBarStyle("dark-content")}/>
    </View>
  )
}
const styles=StyleSheet.create(
  {
    container:
    {
      flex:1,
      justifyContent:'center'
    }
  }
)
export default App;