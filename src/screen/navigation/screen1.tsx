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
const BeforeScreen = ({ navigation,route}:any) => {
    console.log(JSON.stringify(route))
    console.log(JSON.stringify(navigation))
    const  {item}  = route.params;
	return (
		<SharedElement id={`item.${item.id}.image`}>
			<Image
				style={{
					position: "absolute",
					width: width - 32,
					height: (width - 32) * 1,
					borderRadius: 20,
				}}
				source={item.image}
			/>
		</SharedElement>
	)
}
export default BeforeScreen;