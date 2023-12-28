import React, { useEffect, useState } from 'react';
import {View,Text, FlatList,Button} from 'react-native';
const App=()=>
{
  const [info,setInfo]=useState([]);
  const getAPIData= async ()=>{
    const data={
      name:"sam",
      age:34,
      email:"s@gmail.com"
    }
    const url='http://192.168.1.103:3000/users';
    let result=await fetch(url,{method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(data)})
    result=await result.json();
    console.warn(result);
  };
  return(
    <View>
      <Text>FLATLIST with API</Text>
      <Button title="press Me" onPress={getAPIData}/>
    </View>
  );
};
export default App;