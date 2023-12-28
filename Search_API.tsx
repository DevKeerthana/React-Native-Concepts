import React, { useState } from 'react';
import {Text,View,TextInput} from 'react-native';
const App=()=>{
  const [data,setdata]=useState([]);
  const userSearch= async(text)=>{

    const url=`http://192.168.55.102:3000/users?q=${text}`;
    let result= await fetch(url);
    result= await result.json();
    if(result){
      setdata(result);
    }

  }
  return(
    <View style={{flex:1,margin:10,rowGap:20}}>
      <TextInput placeholder='Search' style={{ borderWidth:1,borderColor:'skyblue'}} onChangeText={(text)=>userSearch(text)}/>
      {
        data.length?data.map((item)=><View>
          <Text>{item.name}</Text>
      <Text>{item.age}</Text>
      <Text>{item.email}</Text>
        </View>):null
      }
      
    </View>
  )
}
export default App;