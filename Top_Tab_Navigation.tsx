import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
const tab=createMaterialTopTabNavigator();
const App=()=>
{
  return(
        <NavigationContainer>
          <tab.Navigator>
            <tab.Screen name='Login' component={Login}/>
            <tab.Screen name='SignUp' component={SignUp}/>
          </tab.Navigator>
        </NavigationContainer>
  )
};
const Login=()=>
{
  return(
    <View>
      <Text>Login</Text>
    </View>
  )
}
const SignUp=()=>
{
  return(
    <View>
      <Text>SignUp</Text>
    </View>
  )
}
export default App;
