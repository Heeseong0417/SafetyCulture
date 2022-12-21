
import React, { useEffect, useState } from 'react';



import safety from "../../../assets/logo/safety_logo.gif"
import {View} from 'react-native-animatable';
import { Image } from 'react-native-animatable';
import comax from './logoComax.gif'
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Main_home from '../navigation/Main_home';

import { SafeAreaProvider } from 'react-native-safe-area-context';
const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;


export  const Main: any =()=>{
    const [splash, setsplash] = useState(true)
    const [isReady, setIsReady] = useState(false);
    const getFonts = async () => {
     
    };
    useEffect(() => {
    
      setTimeout(() => {
        setsplash(data => data = false)
      }, 3000);
      return () => {
       
      }
    }, [])

    
      return (<>
      {
splash ? (<>

<View style={{backgroundColor:"#fff",flex:1,justifyContent:"center"}}><Image source={safety}  style={{width:WINDOW_WIDHT,height:WINDOW_WIDHT}} /></View></>):(<SafeAreaProvider><Main_home/></SafeAreaProvider>)


      }
      
      
      
      </>);

  }
 