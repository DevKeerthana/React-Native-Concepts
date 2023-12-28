import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const App = () => {
  const skills = [
    {
      id: 1,
      name: "java"
    },
    {
      id: 2,
      name: "SQL"
    },
    {
      id: 3,
      name: "PHP"
    },
    {
      id: 4,
      name: "NODE"
    }
  ]
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      {
        skills.map((item, index) => <TouchableOpacity
          key={index}
          onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio == item.id ? <View style={styles.radioBig}></View> : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>)
      }
    </View>
  )
}
const styles = StyleSheet.create(
  {
    main:
    {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    radioText:
    {
      fontSize: 20
    },
    radio:
    {
      height: 40,
      width: 40,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 20,
      margin: 10
    },
    radioBig:
    {
      backgroundColor: 'black',
      height: 28,
      width: 28,
      borderRadius: 20,
      margin: 4
    },
    radioWrapper:
    {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
)
export default App;
