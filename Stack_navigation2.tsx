import React, { useState } from 'react';
import {View,Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
const App=()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                                        headerStyle:{backgroundColor:'blue'},
                                        headerTintColor:'orange',
                                        headerTitleStyle:{fontSize:25}}}>
        <Stack.Screen name='login' component={Login} options={{
                                                     headerStyle:{backgroundColor:'yellow'},
                                                     headerTintColor:'black',
                                                     headerTitleStyle:{fontSize:30,color:'red'}}}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
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