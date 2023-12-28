import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
const App = () => {
  const [data, setData] = useState(undefined);
  const getAPTData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(() => {
    getAPTData();
  }, [])
  return (
    <ScrollView>
      <Text style={{ fontSize: 30 }}>API CALL</Text>

      {
        data.length ? data.map((item)=> <View style={{padding:10,borderBlockColor:'black',borderBottomWidth:1}}>
          <Text style={{ fontSize: 20 }}>{item.id}</Text>
          <Text style={{ fontSize: 20 }}>{item.userId}</Text>
          <Text style={{ fontSize: 20 }}>{item.title}</Text>

      </View>) : null
      }
    </ScrollView>
  )
}
export default App;