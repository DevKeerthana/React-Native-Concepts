import React,{useState} from 'react';
import { StyleSheet,Text,View,TextInput } from 'react-native';
export default function App()
{
  const [name,setName]=useState('keerthana');
  const [age,setAge]=useState('30');
  return(
    <View style={styles.container}>
      <Text> Enter Name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe'//displayes blurr text of provided text
        onChangeText={(val)=>setName(val)} //entered name will be updated in the above name place.
        /> 
      <Text>Enter Age:</Text>
      <TextInput 
        style={styles.input}
      placeholder='e.g.99'//displays blurr text of provided text
      onChangeText={(val)=>setAge(val)} ////updates entered age in above age variable.
      />
      <Text>name:{name},age:{age}</Text>
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    //paddingTop:30,
    paddingHorizontal:100,
    justifyContent:'center'
  },
  input:{
    borderWidth:3,
    borderColor:'black',
    padding:10,
    margin:10,
    width:200,
  }
});