
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, useWindowDimensions, View } from 'react-native';
import MaterialCommunityIcons   from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardStyleInterpolators } from 'react-navigation-stack';
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from './HomeScreen';
import Main_home from './Main_home';
import Navigation from './Navigation';
import None1 from './None';
import { grany_home, safety_main } from '../../style/Styles';
import Grany_main from './Grany_main';
//import IC from "../../CertificationTest/index"
import Certification from '../../Certification';
import CertificationResult from '../../CertificationResult';
import KakaoLogin from '../kakao/KakaoLogin';
import Start_user from '../kakao/Start_user';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Safety_main from '../main/Safety_main';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { TabBar } from './TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import TestScreen from '../main/TestScreen';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ResultScreen from '../main/ResultScreen';
import UserScreen from '../main/UserScreen';

const Tab = createMaterialTopTabNavigator();
const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

function BottomTabNav({route,navigation}:any) {
 console.log("router : ",route.params)
const [user, setuser] = useState([""])
const [parent, setparent] = useState({})
const [check, setcheck] = useState({})
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "none",
    primaryContainer:"white",
    background:"none"
  },
};
  
  
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarPosition="bottom"
    
    screenOptions={{
 
tabBarInactiveTintColor:"#fff",
tabBarActiveTintColor:"#0093F0",
tabBarLabelStyle:{opacity:0.8, fontFamily:"GmarketSansTTFMedium",fontWeight:"300"},
      tabBarItemStyle:{flex:1},
      tabBarIconStyle:{alignItems:"center",width:widthPercentageToDP('10%'),opacity:0.8},
      tabBarIndicatorStyle:[{backgroundColor:"transparent",alignContent:"center",justifyContent:"center"},safety_main.shadow],
      
           tabBarStyle:{backgroundColor:"#0073F0", position:"absolute",bottom:5,left:5,right:5,borderRadius:15}
    }}
    
    
    
   >

  
      
      

    
     
  
    
    <Tab.Screen
      name="홈"
      
      component={Safety_main}
     
      options={{
        
        
        tabBarLabel: '홈',
       
        
        tabBarIcon: ({ color }) => (
          

         
          <MaterialCommunityIcons   name="home" color={color} size={heightPercentageToDP('3%')} /> 
        ),
      }}
      initialParams={{data: route.params.userId,route_nav:navigation}}
    ></Tab.Screen>
      
      <Tab.Screen
      name="위험성 평가하기"
      
      component={TestScreen}
      
      options={{

       
        tabBarLabel: '평가',
        tabBarIcon: ({ color }) => (
          
          <MaterialCommunityIcons   name="clipboard-text-outline" color={color} size={heightPercentageToDP('3%')} />
        ),
      }}
      
      initialParams={{data: route.params.userId,route_nav:navigation}}
    />
    <Tab.Screen
      name="결과"
      
      component={ResultScreen}
      
      options={{

       
        tabBarLabel: '결과',
        tabBarIcon: ({ color }) => (
          
          <MaterialCommunityIcons   name="chart-pie" color={color} size={heightPercentageToDP('3%')} />
        ),
      }}
      
      initialParams={{data: route.params.userId,route_nav:navigation}}
    />
    
    <Tab.Screen
      name="정보"
      component={UserScreen}
      options={{
        
        tabBarLabel: '정보',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons   name="account-box-multiple-outline" color={color} size={heightPercentageToDP('3%')} />
        ),
      }}
      initialParams={{data: route.params.userId}}
    />
   {/**<Tab.Screen
         
          name="Certification"
          component={Certification}
        />
         <Tab.Screen
         
         name="CertificationResult"
         component={CertificationResult}
       />
    **/}
  </Tab.Navigator>

  );
}
export default BottomTabNav;


/**
 * 
 *  <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
      shifting={true}
    >
      
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        
        options={{
          
          
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons   name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={None1}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons   name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons   name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
 */