import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Menu from 'react-native-vector-icons/Entypo';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, marginBottom: 10, flexDirection: 'column', rowGap: 10 }}>
        <Menu name='menu' size={35} />
        <Text style={styles.text}>Choose Your Delicious Meal</Text>
        <View style={{ flexDirection: 'row', columnGap: 50, marginLeft: 50 }}>
            <Icon name='home' size={35} />
          <Icon name='hearto' size={35} />
          <Icon name='filter' size={35} />
          <Icon name='shoppingcart' size={35} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Image source={require('./src/assets/panner.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Panner Curry</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 200</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Image source={require('./src/assets/roti.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Roti</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 90</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Image source={require('./src/assets/sweet.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Sweets</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 150</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Image source={require('./src/assets/meals.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Meals</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 120</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>CART ITEMS</Text>
        </View>
      </ScrollView>
    </View >
  )
};
const styles = StyleSheet.create(
  {
    text: {
      color: 'lightgreen',
      fontSize: 19,
      fontWeight: 'bold'
    },
    view1:{
      flex: 1, 
      flexDirection: 'row', 
      margin: 40,
       columnGap: 30
    },
    view2:{
      flexDirection: 'column',
       rowGap: 10, 
       justifyContent: 'center', 
       alignItems: 'center'
    },
    view3:{
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      borderBottomEndRadius:15,
      borderBottomLeftRadius:15,
      height:35,
      width:300,
      borderWidth:1,
      backgroundColor:'lightgreen',
      marginLeft:65
    }
  }
);
export default App;