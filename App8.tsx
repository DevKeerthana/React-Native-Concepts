import React,{useState} from 'react';
import { StyleSheet,Text,View,ScrollView, FlatList } from 'react-native';
export default function App()
{
  const [people,setPeople]=useState([
    {name:'Pavan',key:'1'},
    {name:'keerthana',key:'2'},
    {name:'Kiran',key:'3'},
    {name:'Viswam',key:'4'},
    {name:'Suma',key:'5'},
    {name:'hema',key:'6'},
    {name:'Hari',key:'7'},
  ]);
  return(
    <View style={styles.container}>
      <FlatList
          numColumns={2} //it is used to display items in 2 columns 
          data={people}
          renderItem={({item})=>(
            <Text style={styles.item}>{item.name}</Text>
        )}
      />
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
    fontSize:24,
    marginHorizontal:10,
    //marginTop:24,
  }
})