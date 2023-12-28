import React from 'react';
import { FlatList ,ScrollView,StyleSheet,Text,View } from 'react-native';
const App=()=>
{
  const users=[
    {
      id:1,
      name:"Anil"
    },
    {
      id:2,
      name:"Sam"
    },
    {
      id:3,
      name:"Peter"
    },
    {
      id:4,
      name:"Bruce"
    }
  ]
  return(
    <View style={styles.item}>
      <Text style={{fontSize:25,color:"orange"}}>FlatList Component</Text>
      <ScrollView>
      {
        users.map((item)=><Text style={{fontSize:20,padding:100}} >Name={item.name}</Text>)
      }
      </ScrollView>
    </View>
  );
};
const styles=StyleSheet.create(
  {
    item:
    {
      flex:1,
      padding:10,
      backgroundColor:"grey",
      borderWidth:2,
      margin:10,
      justifyContent:'center',
      alignItems:'center'
    }
  }
)
export default App;
