import React from 'react';
import {Text,View,Image, Button,StyleSheet, ScrollView} from 'react-native';
import Header from './components/redux/Header';
import Product from './components/redux/Product';
const App=()=>{
  const product=[
    {
      name:"samsung",
      price:54000,
      color:'white',
      image:require('./src/assets/phone.jpg')
    },
    {
      name:"Vivo",
      price:13000,
      color:'white',
      image:require('./src/assets/phone.jpg')
    },
    {
      name:"OPPO",
      price:26000,
      color:'white',
      image:require('./src/assets/phone.jpg')
    },
    {
      name:"Redmi",
      price:130000,
      color:'white',
      image:require('./src/assets/phone.jpg')
    }
  ];
  return(
    <View style={{flex:1}}>
      <Header/>
      <ScrollView>
      {
      product.map((item)=><Product item={item}/>)
      }
      </ScrollView>
    </View>
  )
};
const styles=StyleSheet.create(
  {
    text:{
      fontSize:25,
      color:'indigo',
    }
  }
)
export default App;
//"C:\Users\kurub\OneDrive\Desktop\thirdApp\src\assets\phone.jpg"
//"C:\Users\kurub\OneDrive\Desktop\thirdApp\src\assets\person1.jpg"