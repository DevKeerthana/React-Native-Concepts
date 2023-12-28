import React, { useState } from 'react';
import {View,Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab=createMaterialTopTabNavigator();
const App=()=>
{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="login" component={Login}/>
        <Tab.Screen name="Home" component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const Home=()=>
{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Home Screen</Text>
    </View>
  )
}
const Login=(props)=>
{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate("Home")}></Button>
    </View>
  )
}
export default App;