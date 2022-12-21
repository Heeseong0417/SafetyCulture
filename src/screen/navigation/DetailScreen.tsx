import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Button,
  Animated
} from 'react-native';
import Modal from "react-native-modal";
import * as Animateable from 'react-native-animatable' ;     
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const { height } = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;
const DetailScreen = ({ route, navigation}:any) => {
const [isModalVisible, setModalVisible] = useState(false);
console.log(JSON.stringify(navigation))
const opacity = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.timing(opacity, {
    toValue: 1,
    duration: 250,
    delay: 500,
    useNativeDriver: true,
  }).start();
}, []);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };  
  function ModalTester() {
    
  
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={toggleModal} />
  
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
  
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
  const  {item}  = route.params;
  
  return (
    
    <View style={{ flex: 1, backgroundColor: '#0f0f0f' }}>

      <SharedElement id={`item_${item.id}_image`}>
      <Image
        source={{ uri: item.image_url }}
        style={{
          width: '100%',
          height: ITEM_HEIGHT,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
        resizeMode='cover'
      />
      </SharedElement>
      <MaterialCommunityIcons
        name='close'
        size={28}
        color='#fff'
        style={{
          position: 'absolute',
          top: 40,
          right: 20,
          zIndex: 2
        }}
        onPress={() => {
          navigation.navigate('HomeScreen',{ item, navigation})
        }}
      />
      <View
        style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 20 }}
      >
       
        <SimpleLineIcons size={40} color='white' name={item.iconName} />
        <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              lineHeight: 28
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 18
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
      <ScrollView
        indicatorStyle='white'
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f'
        }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};
export default DetailScreen
