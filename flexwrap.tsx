import React,{useEffect, useState} from 'react';
import {Text,View,Button} from 'react-native';
const App=()=>
{
  const user=[
    {
      id:1,
      name:"keerthana"
    },
    {
      id:2,
      name:"Hema"
    },
    {
      id:3,
      name:"Suma"
    },
    {
      id:4,
      name:"Saikiran"
    },
    {
      id:5,
      name:"Pavan"
    },
    {
      id:6,
      name:"Viswam"
    }
  ]
  
  return(
      <View style={{flex:1,flexDirection:'row',flexWrap:"wrap"}}>
        {
          user.map((item)=><Text style={{fontSize:40,color:"green"}}>  {item.name}</Text>)
        }
      </View>
  )
}
export default App;