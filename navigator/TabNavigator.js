import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import DetailScreen from "../screens/DetailScreen";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
     <Tab.Navigator  
        barStyle={{ backgroundColor: 'powderblue' }}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} 
          options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="hand-heart" size={24} color="black" />)
          }}/> 
        <Tab.Screen name="Home" component={HomeScreen}  
          options={{
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />)
          }}/>       
        <Tab.Screen name="Favorites" component={FavoritesScreen} 
          options={{
          tabBarIcon: () => (
            <AntDesign name="hearto" size={24} color="black" />)
       }}/>  
       <Tab.Screen name="Details" component={DetailScreen} 
          options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="details" size={24} color="black" />)
       }}/>  
      </Tab.Navigator>
  )
};

export default TabNavigator;
