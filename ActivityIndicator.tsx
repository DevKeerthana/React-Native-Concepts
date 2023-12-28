import React, { useState } from 'react';
import {ActivityIndicator, Text,View,Button} from 'react-native';
const App=()=>
{
  const [show,setShow]=useState(false);
  return(
    <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={100} color="green" animating={show}/>
      <Button title="Press me" onPress={()=>setShow(!show)}/>
    </View> 
  )
}
export default App;