import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { GoogleSignin,statusCodes } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
const App = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const Sign_In = async () => {
    try {
        GoogleSignin.configure({
          scopes: ["profile","email"], // what API you want to access on behalf of the user, default is email and profile
          webClientId:'725707295819-5qkgrenig4fngeg8c20ccee692buajmd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = await GoogleSignin.signIn();
      //const googlecredential = auth.googleauthprovider.credential(idtoken);
      //return auth().signinwithcredential(googlecredential);
      setloggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
      console.log(userInfo);
      setloggedIn(true);
      return userInfo;
    } catch (error) {
      //Alert.alert("error");
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          Alert.alert("signin failed");// user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          Alert.alert("in progress");// operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          Alert.alert("not available");// play services not available or outdated
        } else if(error.code === statusCodes.SIGN_IN_REQUIRED){
          Alert.alert("sign in required");
        }
        else{
          console.log(error);
          Alert.alert("other error");
        }
    }
  };
  
 /* useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/userinfo.profile"], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
      '725707295819-5qkgrenig4fngeg8c20ccee692buajmd.apps.googleusercontent.com' // client ID of type WEB for your server (needed to verify user ID and offline access)
      //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);*/
  return (
    <View style={{ flex: 1, backgroundColor: 'lightpink' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>Sign In Page</Text>
        <Text style={{ fontSize: 16 }}>Welcome to Sign In page</Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity touchSoundDisabled={false} onPress={Sign_In}>
          <View style={styles.button}>
            <Icon name='google' size={30} color='green' />
            <Text style={styles.text}>Sign In With Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://facebook.com")}>
          <View style={styles.button}>
            <Icon name='facebook-square' size={30} color='blue'></Icon>
            <Text style={styles.text}>Sign in With Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://apple.com")}>
          <View style={styles.button}>
            <Icon name='apple1' size={30} color='red'></Icon>
            <Text style={styles.text}>Sign in With Apple</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create(
  {
    button: {
      margin: 10,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 16,
      height: 50,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 30,
      backgroundColor: 'lightgreen'
    },
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      margin: 30,
      borderCurve: 'circular',
      borderRadius: 25,
    },
    text: {
      color: 'black',
      fontSize: 20
    }

  }
)
export default App;
/*componentDidMount(){
    GoogleSignin.configure({
      webClientId:'525461093056-8247d98ae3mfvsc1qebt5s2kn8pu13cq.apps.googleusercontent.com',
    });
  }
  handleSignIn = async()=>{
  try{
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo.user.email);
  }catch(error){
    console.error(error);
  }
}*/