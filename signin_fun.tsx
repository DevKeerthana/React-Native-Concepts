import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const App=()=>
{
  return(
    <View style={{flex:1,backgroundColor:'lightpink'}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:30}}>Sign In Page</Text>
        <Text style={{fontSize:16}}>Welcome to Sign In page</Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity touchSoundDisabled={false} onPress={()=>Linking.openURL("https://google.com")}>
        <View style={styles.button}>
          <Icon name='google' size={30} color='green'/>
          <Text style={styles.text}>Sign In With Google</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL("https://facebook.com")}>
        <View style={styles.button}>
          <Icon name='facebook-square' size={30} color='blue'></Icon>
          <Text style={styles.text}>Sign in With Facebook</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL("https://apple.com")}>
        <View style={styles.button}>
          <Icon name='apple1' size={30} color='red'></Icon>
          <Text style={styles.text}>Sign in With Apple</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles=StyleSheet.create(
  {
    button:{
      margin:10,
      borderWidth:2,
      borderColor:'black',
      borderRadius:16,
      height:50,
      width:300,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      columnGap:30,
      backgroundColor:'lightgreen'
    },
    view:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'black',
      borderWidth:1,
      margin:30,
      borderCurve:'circular',
      borderRadius:25,
    },
    text:{
        color:'black',
        fontSize:20
    }

  }
)
export default App;