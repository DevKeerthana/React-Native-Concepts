import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
const Feed=()=>
{
  return(
    <View>
      <Text>Login</Text>
    </View>
  )
}
const Article=()=>
{
  return(
    <View>
      <Text>SignUp</Text>
    </View>
  )
}
/*import React from 'react';
import {View,Text,Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
export default class App extends React.Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:80}}>Home Screen</Text>
        <Open nav={this.props.navigation}/>
      </View>
    );
  }
};
function Profile(props)
{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:80}}>Profile Screen</Text>
        <Open nav={props.navigation}/>
    </View>
  );
}
function About(props)
{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:80}}>About Screen</Text>
        <Open nav={props.navigation} />
    </View>
  );
}
function Open(props)
{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button title="Draw Nav" onPress={()=>props.nav.openDrawer()}></Button>
    </View>
  );
}
const appNavigator=createDrawerNavigator({
  Home:{
    screen:App
  },
  Profile:{
    screen:Profile
  },
  About:{
    screen:About
  }
})*/
