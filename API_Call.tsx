import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
const App = () => {
  const [data, setData] = useState(undefined);
  const getAPTData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(() => {
    getAPTData();
  }, [])
  return (
    <View>
      <Text style={{ fontSize: 30 }}>API CALL</Text>

      {
        data ? <View>
          <Text style={{ fontSize: 30 }}>{data.id}</Text>
          <Text style={{ fontSize: 30 }}>{data.userId}</Text>
          <Text style={{ fontSize: 30 }}>{data.title}</Text>
          <Text style={{ fontSize: 30 }}>{data.body}</Text>

      </View> : null
      }
    </View>
  )
}
export default App;