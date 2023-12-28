import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet,Modal } from 'react-native';
const App = () => {
  const [data, setData] = useState([])
  const [showModal,setShowModal]=useState(false);
  const [selectedUser,setSelectedUser]=useState(undefined);
  const getAPIData = async () => {
    const url = 'http://192.168.55.102:3000/users';
    let result = await fetch(url)
    result = await result.json();
    setData(result);

  };
  useEffect(() => {
    getAPIData();
  }, []);
  const deleteUser=async(id)=>{
    const url='http://192.168.55.102:3000/users';
    let result=await fetch(`${url}/${id}`,{method:"delete"});
    result=await result.json();
    if(result){
      console.warn("User deleted");
      getAPIData();
    }

  }
  const updateUser=(data)=>{
      setSelectedUser(data);
      setShowModal(true);
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
            <View style={{ flex: 1 }}><Button title="Update" onPress={()=>updateUser(item)}/></View>
          </View>) : null
      }
      <Modal visible={showModal} transparent={true}>
        <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getAPIData={getAPIData()}/>
      </Modal>
    </View >
  );
};
const UserModal=(props)=>
{
  const [name,setName]=useState(undefined);
  const [age,setAge]=useState(undefined);
  const [email,setEmail]=useState(undefined);
  useEffect(()=>{
    if(props.selectedUser)
    {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
    }
  },[props.selectedUser]);
  const updateUser= async()=>{
    const url='http://192.168.55.102:3000/users';
    const id=props.selectedUser.id;
    let result= await fetch(`${url}/${id}`,{
      method:"Put",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,age,email})});
      result=await result.json();

  }
  const CloseModal=()=>{
    props.setShowModal(false);
    props.getAPIData();

  }
  return(
    
    <View style={styles.centeredView}>
          <View style={styles.ModalView}>
            
            <TextInput style={styles.input} value={name} onChangeText={(text)=>{setName(text)}}/>
            <TextInput style={styles.input} value={age} onChangeText={(text)=>{setAge(text)}}/>
            <TextInput style={styles.input} value={email} onChangeText={(text)=>{setEmail(text)}}/>
            <View style={{marginBottom:10}}>
            <Button title="Update" onPress={updateUser}/>
            </View>
            <Button title='close' onPress={()=>props.setShowModal(false)}/>
          </View>
        </View>
  )
}
const styles = StyleSheet.create(
  {
    dataWrapper:
    {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'orange',
      margin: 5,
      padding: 8
    },
    ModalView:{
      padding:25,
      backgroundColor:'white',
      borderRadius:10,
      borderWidth:1,
    },
    centeredView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    input:{
      borderWidth:1,
      padding:10,
      width:300,
      marginBottom:10,
      borderColor:'skyblue'
    }
  }
)
export default App;