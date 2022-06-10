import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { PLACES } from '../data/Places';
import PlaceList from '../components/PlaceList';

const HomeScreen = (props) => 
{
  const prikazElelementa = (podaci) => {
    return (
      <PlaceList name={podaci.item.name} 
                 location={podaci.item.location}
                 image={podaci.item.image}
                 price={podaci.item.price} 
                 odabir={() => props.navigation.navigate('Details')}>
      </PlaceList>

  );
  };

  return <FlatList data={PLACES} renderItem={prikazElelementa} numColumns={1}/>  
}
export default HomeScreen;