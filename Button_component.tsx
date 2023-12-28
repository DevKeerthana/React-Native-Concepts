import React from 'react';
import {View,Text,StyleSheet,Alert,Button} from 'react-native';
const App=()=>
{
  const msg=()=>
  {
    Alert.alert("Hey Good Morning");
  }
  return(
  <View style={styles.view}>
    <Text style={styles.text}>Hello World!!!</Text>
    <Text style={styles.text}>This is React Native</Text>
    <Button title='Press Me' color='skyblue' onPress={msg}></Button>
    <UserData/>
  </View>
  )
};
const UserData=()=>
{
  return(
    <View>
      <Text style={styles.user}>Name:Keerthana</Text>
      <Text style={styles.user}>ID:r170225</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  text:{
    fontSize:30,
    color:'orange'
  },
  view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    flexDirection:'column'
  },
  user:{
    color:'orange',
    margin:5,
    padding:25,
    borderColor:'blue',
    borderCurve:'circular',
    backgroundColor:'green',
    justifyContent:'flex-start'
  }
})
export default App;