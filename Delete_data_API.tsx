import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
const App = () => {
  const [data, setData] = useState([])

  const getAPIData = async () => {
    const url = 'http://192.168.1.103:3000/users';
    let result = await fetch(url)
    result = await result.json();
    setData(result);

  };
  useEffect(() => {
    getAPIData();
  }, []);
  const deleteUser=async(id)=>{
    const url='http://192.168.1.103:3000/users';
    let result=await fetch(`${url}/${id}`,{method:"delete"});
    result=await result.json();
    if(result){
      console.warn("User deleted");
      getAPIData();
    }

  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.dataWrapper}>
        <View style={{ flex: 1 }}><Text>Name</Text></View>
        <View style={{ flex: 1.5 }}><Text>Age</Text></View>
        <View style={{ flex: 2 }}><Text>Operations</Text></View>
      </View>
      {
        data.length ?
          data.map((item) => <View style={styles.dataWrapper}>
            <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
            <View style={{ flex: 1 }}><Button title="Delete" onPress={()=>deleteUser(item.id)}/></View>
            <View style={{ flex: 1 }}><Button title="Update"/></View>
          </View>) : null
      }
    </View >
  );
};
const styles = StyleSheet.create(
  {
    dataWrapper:
    {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'orange',
      margin: 5,
      padding: 8
    }
  }
)
export default App;