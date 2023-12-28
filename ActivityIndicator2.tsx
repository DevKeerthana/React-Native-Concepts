import React, { useState } from 'react';
import {ActivityIndicator, Text,View,Button} from 'react-native';
const App=()=>
{
  const [show,setShow]=useState(false);
  const update=()=>
  {
    setShow(true);
    setTimeout(()=>
    {
      setShow(false)
    },5000);
  }
  return(
    <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={100} color="green" animating={show}/>
      <Button title="Press me" onPress={update}/>
    </View> 
  )
}
export default App;