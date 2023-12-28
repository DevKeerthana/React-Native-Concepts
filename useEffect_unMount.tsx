import React,{useEffect, useState} from 'react';
import {Text,View,Button} from 'react-native';
const App=()=>
{
  const [show,setShow]=useState(true);
  return(
      <View>
        <Text style={{fontSize:30}}>useEffect for unmount component</Text>
        <Button title="toggle" onPress={()=>setShow(!show)}/>
        {
          show? <Student/> : null
        }
      </View>
  )
}
const Student=()=>
{
  setInterval(()=>
  {
    console.warn("Timer called");
  },2000)
  useEffect(()=>
  {
    console.warn("useEffect for component unmount");
  })
  return(
    <View>
      <Text style={{color:'red',fontSize:30}}>student</Text>
    </View>
  )
}
export default App;