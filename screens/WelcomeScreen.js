import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');

import { PLACES } from "../data/Places";

const WelcomeScreen = (props) => 
{
    return (
        <View style={{backgroundColor: "white"}}>
            <View style={stil.picture}>
              <Image style={stil.slika} source={require('../assets/places/welcome.jfif')}/> 
            </View>
              <Button title="Start" color="black" onPress={() => {props.navigation.navigate("Home")}} />        
            </View>
      )
}

const stil = StyleSheet.create({
  slika:{
    width: 340,
    height: 550,
    alignItems:"center",
    margin: 40,
    },
  picture:{
    alignItems: "center",
    width:Image.getSize.width,
    height:Image.getSize.height
  }
});

export default WelcomeScreen;