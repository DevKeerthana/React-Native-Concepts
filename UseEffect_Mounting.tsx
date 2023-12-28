import React,{useEffect, useState} from 'react';
import {Text,View,Button} from 'react-native';
const App=()=>
{
  const [count,setCount]=useState(0);
  useEffect(()=>
  {
    console.warn("use effect for mounting");
  },[])
  return(
      <View>
        <Text style={{fontSize:15}}>Life cycle with use effect {count}</Text>
        <Button title='UpdateCount' onPress={()=>setCount(count+1)}/>
      </View>
  )
}
export default App;