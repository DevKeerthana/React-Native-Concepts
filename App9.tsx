import React,{useState} from 'react';
import { StyleSheet,Text,View,FlatList,TouchableOpacity,Alert } from 'react-native';
export default function App()
{
  const [people,setPeople]=useState([
    {name:'shaun',key:'1'},
    {name:'yoshi',key:'2'},
    {name:'mario',key:'3'},
    {name:'luigi',key:'4'},
    {name:'peach',key:'5'},
    {name:'toad',key:'6'},
    {name:'browser',key:'7'}
  ]);
  const pressHandler=(key)=>{
    Alert.alert("key="+key)
  }
return(
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
    />
    </View>
  );
}
const styles= StyleSheet.create({
 container:{
   flex:1,
    backgroundColor:'pink',
    //paddingTop:30,
    paddingHorizontal:100,
    justifyContent:'center'
  },
  item:{
    padding:10,
    margin:40,
    fontSize:30,
    borderColor:'black',
    borderWidth:2,
  }
});