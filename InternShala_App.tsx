import React from "react";
import { View, Text } from 'react-native';
import User from 'react-native-vector-icons/FontAwesome6';
import Bag from 'react-native-vector-icons/Ionicons';
import Shop from 'react-native-vector-icons/Entypo';
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'ghostwhite' }}>
      <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 38, color: '#012E57', fontWeight: '500' }}>Join As</Text>
      </View>
      <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 55, width: 340, backgroundColor:'white',borderWidth: 1, margin: 35, borderRadius: 30, borderCurve: 'circular', marginLeft: 30, flexDirection: 'row', columnGap: 5 }}>
          <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 1, backgroundColor: '#012E57', justifyContent: 'center', alignItems: 'center' }}>
            <User name="user-group" size={30} color={'white'} />
          </View>
          <View style={{ flexDirection: 'column', margin: 6 }}>
            <Text style={{ fontSize: 17, color: '#012E57', fontWeight: '600' }}>Individual</Text>
            <Text style={{ color: '#012E57' }}>Join and Build real time community</Text>
          </View>
        </View>
        <View style={{ backgroundColor:'white',height: 55, width: 340, borderWidth: 1, margin: 35, borderRadius: 30, borderCurve: 'circular', marginLeft: 30, flexDirection: 'row', columnGap: 5 }}>
          <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 1, backgroundColor: '#012E57', justifyContent: 'center', alignItems: 'center' }}>
            <Bag name="briefcase-outline" size={35} color={'white'} />
          </View>
          <View style={{ flexDirection: 'column', margin: 6 }}>
            <Text style={{ fontSize: 17, color: '#012E57', fontWeight: '600' }}>Professional</Text>
            <Text style={{ color: '#012E57' }}>World's largest service community</Text>
          </View>
        </View>
        <View style={{ height: 55, width: 340, borderWidth: 1, margin: 35, borderRadius: 30, borderCurve: 'circular', marginLeft: 30, flexDirection: 'row', columnGap: 5 }}>
          <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 1, backgroundColor: '#012E57', justifyContent: 'center', alignItems: 'center' }}>
            <Shop name="shop" size={35} color={'white'} />
          </View>
          <View style={{ flexDirection: 'column', margin: 6 }}>
            <Text style={{ fontSize: 17, color: '#012E57', fontWeight: '600' }}>Merchant</Text>
            <Text style={{ color: '#012E57' }}>World's largest merchant's community</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>

      </View>
    </View>
  );
};
export default App;