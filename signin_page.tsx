import React from 'react';
import { View, Text, Button, StyleSheet,Alert} from 'react-native';
const App = () => {
  const google=()=>
  {
    Alert.alert("You are signed into google");
  }
  const facebook=()=>
  {
    Alert.alert("you are signed into facebook");
  }
  const apple=()=>
  {
    Alert.alert("you are signed into Apple");
  }
  return(
    <View style={{flex:1,backgroundColor:'lightblue'}}>
      <View style={{alignItems:'center', justifyContent:'center',flex:1}}>
        <Text style={styles.text}>Sign In Page</Text>
        <View style={{margin:10}}></View>
        <Text>Welcome to Sign in page</Text>
      </View>
      <View style={styles.view}>
        <Button title='Sign In with Google' color='green' onPress={google}></Button>
          <View style={{margin:10}}></View>
          <Button title='Sign In with Facebook' color='blue' onPress={facebook}></Button>
          <View style={{margin:10}}></View>
          <Button title='Sign In with Apple' color='red' onPress={apple}></Button>
      </View>
    </View>
  );
};
const styles=StyleSheet.create(
  {
    text:{
      fontSize:35,
      color:'black',
      fontWeight:'bold'
    },
    view:{
      justifyContent:'center',
      flex:1,
      borderWidth:2,
      borderColor:'black',
      borderCurve:'circular',
      borderStyle:'solid',
      margin:15,
      borderRadius:50
    },
    button:{
      borderWidth:1,
      borderCurve:3,
      borderColor:'black'
    }

  }
);
export default App;