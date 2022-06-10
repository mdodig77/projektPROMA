import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import DetailScreen from "../screens/DetailScreen";

const PlaceList = (props) => {
   
  return (
      <TouchableOpacity style={{alignItems: "center"}}
        onPress={props.odabir}>
          <View style={{ ...stil.tipka, ...props.style }}>
          <View>
            <Text>{props.name}</Text>
            <Text>{props.location}</Text>
            <Image source={props.image}/>
            <Text>{props.price}</Text>
            <Button title="Details" color="pink" onPress={() => {DetailScreen}}/>  
          </View>        
          </View>    
      </TouchableOpacity>
  );
};

const stil = StyleSheet.create({

});

export default PlaceList;
