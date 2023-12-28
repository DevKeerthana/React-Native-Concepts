import React,{useEffect, useState} from 'react';
import {Text,View,Button} from 'react-native';
const App=()=>
{
  const [count,setCount]=useState(0);
  const [data,setdata]=useState(0);
  useEffect(()=>
  {
    console.warn("use effect for update of count");
  },[count])
  useEffect(()=>
  {
    console.warn("useEffect for update of data")
  },[data])
  return(
      <View>
        <Text style={{fontSize:15}}>Life cycle with use effect {count}</Text>
        <Button title='UpdateCount' onPress={()=>setCount(count+1)}/>
        <Text style={{fontSize:15}}>Life cycle with use effect {data}</Text>
        <Button title='UpdateCount' onPress={()=>setdata(data+1)}/>
      </View>
  )
}
export default App;