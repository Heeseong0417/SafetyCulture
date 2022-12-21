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

const { width,height } = Dimensions.get('window');
const AfterScreen = ({ navigation ,route}:any) => {
    console.log(JSON.stringify(route))
    console.log(JSON.stringify(navigation))
	const  item  = route.params;
    return (
		<SharedElement id={`item.${item.id}.image`}>
      <Image
        style={{
          position: "absolute",
          width: width,
          height: width * 1.4545,
          borderRadius: 0,
          top: -(height + 80),
        }}
        source={item.image}
      />
    </SharedElement>
	)
}
export default AfterScreen