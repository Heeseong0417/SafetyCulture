import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import {View, TouchableOpacity, Dimensions, GestureResponderEvent, Alert, StatusBar} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { grany_home, styles_main } from "../../style/Styles";
import {Text} from 'react-native'

type props ={
name:string
nav: any
}
export type BnbNavigator = {

    Home: undefined;
    Traffic: undefined;
    Safety: undefined;
    CarLog:undefined;
    Account:undefined;  
    jumpTo(arg0: string): void;
    
  };
  const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export const Header_create =({name,nav}: props)=>{
  const [state, setstate] = useState("none")
const [user, setuser] = useState("")
 
    return(
    <>
    <StatusBar backgroundColor="#0073F0" barStyle="light-content" />
    

    
    <View style={[grany_home.main_header,{backgroundColor:"#0073F0"}]}>
       <Text style={[grany_home.main_ht,{color:"#fff"}]}>{name}</Text>
  <TouchableOpacity style={[styles_main.header_text,{position:"absolute",alignSelf:"center",right:20,top:15}]} onPress={()=> nav()}>
    <Ionicons onTextLayout={()=>"my"}  color={"#fff"} name={"menu"} size={WINDOW_WIDHT/10}/>
  </TouchableOpacity>
       
    </View>
 

      </>
      )
 }
