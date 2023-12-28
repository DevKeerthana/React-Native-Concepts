import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Pie from 'react-native-pie';
import Phone from 'react-native-vector-icons/FontAwesome';
import Mail from 'react-native-vector-icons/Feather';
import Body from 'react-native-vector-icons/Ionicons';
import Ortho from 'react-native-vector-icons/FontAwesome5';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import History from 'react-native-vector-icons/MaterialIcons';
import {ProgressCircle} from 'react-native-svg-charts';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#012E57'} />
      <View style={{ flexDirection: 'row', columnGap: 15, justifyContent: 'flex-start', marginLeft: 20, marginTop: 10, borderBottomWidth: 1, flex: 0.08 }}>
        <Icon name='arrowleft' size={25} />
        <Text style={{ color: '#012E57', fontSize: 17 }}>View Patient</Text>
      </View>
      <View style={{ flexDirection: 'row', columnGap: 140, margin: 20, marginRight: 30 }}>
        <View>
          <Text style={{ fontSize: 18, color: '#012E57' }}>S.Meena,  F/23</Text>
          <Text style={{ color: '#012E57' }}>Patient ID:87 20200727153457</Text>
        </View>
        <User name='user-circle-o' size={40} color={'#012E57'} />
      </View>
      <View style={{ height: 150, width: 350, borderWidth: 1, marginLeft: 30, marginTop: 10, borderRadius: 20, backgroundColor: '#012E57' }}>
        <Text>Goal reached</Text>
      <View style={{marginTop: hp('5%')}}>
          <ProgressCircle
            style={{height: 200}}
            progress={0.3}
            progressColor={'yellow'}
            startAngle={-Math.PI * 0.5}
            endAngle={Math.PI * 0.5}
            strokeWidth={30}
            cornerRadius={0}
          />
        </View>
      </View>
      <View style={{ margin: 40, flexDirection: 'column', rowGap: 10 }}>
        <View style={{ flexDirection: 'row', columnGap: 100 }}>
          <Text>Phone no</Text>
          <View style={{ flexDirection: 'row', columnGap: 10 }}>
            <Phone name='phone' size={20} />
            <Text style={{ color: 'black' }}>8022334455</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', columnGap: 120 }}>
          <Text>Mail ID</Text>
          <View style={{ flexDirection: 'row', columnGap: 10 }}>
            <Mail name='mail' size={20} />
            <Text style={{ color: 'black' }}>meenara@gmail.com</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', columnGap: 75 }}>
          <Text>Affected side</Text>
          <View style={{ flexDirection: 'row', columnGap: 10 }}>
            <Body name='body-sharp' size={20} color={'red'} />
            <Text style={{ color: 'black' }}>Bilateral</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', columnGap: 100 }}>
          <Text>Condition</Text>
          <View style={{ flexDirection: 'row', columnGap: 10 }}>
            <Ortho name='globe-americas' size={20} />
            <Text style={{ color: 'black' }}>Ortho</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', columnGap: 100 }}>
          <Text>Speciality</Text>
          <View style={{ flexDirection: 'row', columnGap: 10 }}>
            <Plus name='clipboard-plus-outline' size={20} />
            <Text style={{ color: 'black' }}>Osteoarthritis</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row',columnGap:20,borderBottomWidth:1,borderTopWidth:1}}>
      <View style={{marginLeft:10,flexDirection:'row'}}>
        <History name='history-edu' size={35} color={'black'}/>
        <Text style={{color:'#012E57',fontSize:18,fontWeight:'900'}}>Medical history</Text>
      </View>
      <Text style={{color:'black',fontSize:15}}>Hypertension,DM,Hypothyrodism</Text>
      </View>
    </View>
  );
};
export default App;