import React, { useEffect, useState } from 'react';
import {View,Text, FlatList,Button, TextInput, StyleSheet} from 'react-native';
const App=()=>
{
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');
  const getAPIData= async ()=>{
    const data={
      name:"sam",
      age:34,
      email:"s@gmail.com"
    }
    const url='http://192.168.1.103:3000/users';
    let result=await fetch(url,{method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify({name,age,email})})
    result=await result.json();
    if(result)
    console.warn(result);
  };
  return(
    <View>
      <Text>FLATLIST with API</Text>
      <TextInput placeholder='Enter Name' 
                  style={styles.input} 
                  value={name} 
                  onChangeText={(text)=>setName(text)}/> 
      <TextInput placeholder='Enter Age' 
                  style={styles.input} 
                  value={age} 
                  onChangeText={(text)=>setAge(text)}/> 
      <TextInput placeholder='Enter Email' 
                  style={styles.input} 
                  value={email} 
                  onChangeText={(text)=>setEmail(text)}/> 
      <Button title="press Me" onPress={getAPIData}/>
    </View>
  );
};
const styles=StyleSheet.create(
  {
    input:{
      borderColor:'skyblue',
      margin:20,
      borderWidth:1
    }
  }
)
export default App;