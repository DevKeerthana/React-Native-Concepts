import React, { useEffect, useState } from 'react';
import {View,Text, FlatList,Button, TextInput, StyleSheet} from 'react-native';
const App=()=>
{
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');
  const [nameError,setNameError]=useState(false);
  const [ageError,setAgeError]=useState(false);
  const [emailError,setEmailError]=useState(false);
  const Error=async ()=>
  {
      if(!name)
      {
        setNameError(true);
      }
      else
      {
        setNameError(false);
      }
      if(!age)
      {
        setAgeError(true);
      }
      else{
        setAgeError(false);
      }
      if(!email)
      {
        setEmailError(true);
      }
      else
      {
        setEmailError(false);
      }
      /*if(!name || !age || !email)
      {
        return false;
      }*/
  }
  
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
    {
      console.warn("data is added");
    }
  };
  return(
    <View>
      <Text>FLATLIST with API</Text>
      <TextInput placeholder='Enter Name' 
                  style={styles.input} 
                  value={name} 
                  onChangeText={(text)=>setName(text)}/> 
        {nameError?<Text style={{color:'red',marginLeft:20}}>Please Enter Valid UserName</Text>:null}
      <TextInput placeholder='Enter Age' 
                  style={styles.input} 
                  value={age} 
                  onChangeText={(text)=>setAge(text)}/> 
      {ageError?<Text style={{color:'red',marginLeft:20}}>Please Enter Valid age</Text>:null}
      <TextInput placeholder='Enter Email' 
                  style={styles.input} 
                  value={email} 
                  onChangeText={(text)=>setEmail(text)}/> 
      {emailError?<Text style={{color:'red',marginLeft:20}}>Please Enter Valid Email</Text>:null}
      <Button title="press Me" onPress={Error}/>
    </View>
  );
};
const styles=StyleSheet.create(
  {
    input:{
      borderColor:'skyblue',
      margin:20,
      borderWidth:1,
      marginBottom:5
    }
  }
)
export default App;