import React,{useState} from 'react';
import { StyleSheet, Text,View,Button, TextInput } from 'react-native';
const App =() =>
{
  const [name,setName]=useState("keerthana");
  const UpdateName=(val)=>
  {
      setName(val);
  }
  return(
    <View style={styles.view}>
      <Text style={styles.text1}>Name:{name}</Text>
      <TextInput style={styles.textInput} placeholder="Enter Your Name" onChangeText={(text)=>UpdateName(text)}></TextInput>
      <Button title='Press Me' color='skyblue' onPress={()=>setName("Naresh")}></Button>
    </View>
  );
};
const styles=StyleSheet.create({
  text1:{
    color:'black',
    fontSize:30
  },
  view:{
    flex:1,
    backgroundColor:'orange',
    //justifyContent:'center',
    //alignItems:'center'
  },
    
  view2:{
    flex:2,
    marginTop:150,
    alignItems:'center'
  },
  textInput:
  {
    borderWidth:1,
    borderColor:'black',
    borderCurve:'circular',
    backgroundColor:'violet',
    marginBottom:40,
    marginTop:40
  }
})
export default App;