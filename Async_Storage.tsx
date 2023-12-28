//Async storage in React native is like a permanent data that we store.Async storage never be deleted unlike we uninstall the app or clear the app data.
import React from 'react';
import {Text,View,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const App=()=>{
  const setdata=async()=>{
    await AsyncStorage.setItem("name","Keerthana")
    console.warn("data set successfully")
  }
  const getdata=async()=>{
    const name=await AsyncStorage.getItem("name");
    console.warn(name);
  }
  return(
    <View style={{flex:1,rowGap:20}}>
      <Text style={{fontSize:20,color:'blue'}}>Async Storage in React Native</Text>
      <Button title="SetData" onPress={()=>setdata()}/>
      <Button title="getData" onPress={()=>getdata()}/>
    </View>
  )
}
export default App;