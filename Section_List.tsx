import React from 'react';
import { SectionList,StyleSheet,Text,View } from 'react-native';
const App=()=>
{
  const users=[
    {
      id:1,
      name:"Anil",
      data:["CSS","BootStrap","HTML"]
    },
    {
      id:2,
      name:"Sam",
      data:["PHP","React JS","Angular"]
    },
    {
      id:3,
      name:"Peter",
      data:["JAVA","JS","HTML"]
    },
    {
      id:4,
      name:"Bruce",
      data:["C","C++","python"]
    }
  ]
  return(
    <View style={styles.item}>
      <Text style={{fontSize:25,color:"orange"}}>FlatList Component</Text>
      <SectionList 
        sections={users}
        renderItem={({item})=> <Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
        renderSectionHeader={({section:{name}})=> (<Text style={{fontSize:25,color:'red'}}>{name}</Text>)}
      />
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
