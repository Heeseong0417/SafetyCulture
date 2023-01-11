
import React, { useEffect, useState } from 'react';


import { NativeBaseProvider } from 'native-base';
import safety_no_move from "../../../assets/logo/safety_no_move.png"
import safety from "../../../assets/logo/safety_logo.gif"
import {View} from 'react-native-animatable';
import { Image } from 'react-native-animatable';
import comax from './logoComax.gif'
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Main_home from '../navigation/Main_home';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import StartNavigation from '../navigation/StartNavigation';



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

<View style={{backgroundColor:"#fff",flex:1,justifyContent:"center"}}><Image source={safety_no_move}  style={{resizeMode:"contain",width:"100%",height:"100%"}} /></View></>):(<NativeBaseProvider><StartNavigation/></NativeBaseProvider>)


      }
      
      
      
      </>);

  }
 