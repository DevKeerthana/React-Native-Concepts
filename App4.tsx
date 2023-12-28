
 import React, {Component} from 'react';  
import {Alert,AppRegistry,Button,StyleSheet,View} from 'react-native';  
  export default class App extends Component{
    onPressButton()
    {
      Alert.alert("you clicked the button!");
    }
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                  onPress={this.onPressButton}
                  title="Press Me"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                  onPress={this.onPressButton}
                  title="Press Me"
                  color="blue"
              />
            </View>
            <View style={styles.multiButtonContainer}>
              <Button
                  onPress={this.onPressButton}
                  title="A disabled button"
                  disabled={true}
                  //color="yellow"
              />
              <Button
                  onPress={this.onPressButton}
                  title="OK!"
                  color="red"
              />
              <Button
                  color='yellow'
                  title='Back'
              />
            </View>
          </View>
        );
      }
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
    },
    buttonContainer:
    {
      margin:20
    },
    multiButtonContainer:
    {
      margin:20,
      flexDirection:'row',
      justifyContent:'space-between'
    }

  })
