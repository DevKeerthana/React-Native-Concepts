import React,{useState} from 'react';
import { StyleSheet,Text,View,ScrollView } from 'react-native';
export default function App()
{
  const [people,setPeople]=useState([
    {name:'shaun',key:'1'},
    {name:'keerthana',key:'2'},
    {name:'mario',key:'3'},
    {name:'luigi',key:'4'},
    {name:'peach',key:'5'},
    {name:'toad',key:'6'},
    {name:'browser',key:'7'},
  ]);
  return(
    <View style={styles.container}>
      <ScrollView>
        {people.map((item)=>{
          return(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text> 
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    paddingTop:40,
    paddingHorizontal:20
  },
  item:{
    marginTop:30,
    padding:40,
    backgroundColor:'pink',
    fontSize:24
  }
})