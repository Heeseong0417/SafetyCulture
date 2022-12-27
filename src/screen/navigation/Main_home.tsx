import { createSharedElementStackNavigator, SharedElement } from "react-navigation-shared-element";
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Button,
  Animated,
  Alert
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./screen1"
import Screen2 from "./screen2"
import None1 from "./None";
import BottomTabNav from "./BottomTabNav";
import StartNavigation from "./StartNavigation";
const { width,height } = Dimensions.get('window');
const Main_home =()=>{

const Stack = createSharedElementStackNavigator();

    return(<>
     <NavigationContainer>
      <Stack.Navigator initialRouteName='StartNavigation'
    screenOptions={{ headerShown: false}}

      >
        
        <Stack.Screen  name='StartNavigation' component={StartNavigation}
       
         />
        <Stack.Screen name='DetailScreen' component={Screen2}
       sharedElements={(route: any) => {
        const { item } = route.params;
        return [{ id: `item.${item.id}.image`, animation: "move" }];
      }}
       
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>)
}
export default Main_home
  
