import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
const App = () => {
  const [name, setname] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);
  const reSetData = () => {
    setDisplay(false);
    setname("");
    setPwd("");
    setEmail("");
  }
  return (
    <View>
      <Text>This is Details Screen</Text>
      <TextInput style={styles.textinput} placeholder="Enter Username" onChangeText={(text) => setname(text)}></TextInput>
      <TextInput style={styles.textinput} placeholder="Enter User Password" secureTextEntry={true} onChangeText={(text) => setPwd(text)}></TextInput>
      <TextInput style={styles.textinput} placeholder="Enter Email" onChangeText={(text) => setEmail(text)}></TextInput>
      <View style={{ marginTop: 20 }} >
        <Button title="Print Details" color="green" onPress={() => setDisplay(true)} />
      </View>
      <Text style={styles.btn}></Text>
      <Button title="Clear Details" color="red" onPress={reSetData}></Button>
      <View>
        {
          display ?
            <View>
              <Text>{name}</Text>
              <Text>{pwd}</Text>
              <Text>{email}</Text>
            </View>
            : null
        }
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textinput: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  btn: {
    marginTop: 15
  }
})
export default App;